"use client";

import { useEffect, useRef, useState } from "react";

/** Reads a CSS color token as sRGB, whatever color space it was written in. */
function tokenRgb(name: string): [number, number, number] {
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  if (!ctx) return [0, 0, 0];
  ctx.fillStyle = value;
  ctx.fillRect(0, 0, 1, 1);
  const d = ctx.getImageData(0, 0, 1, 1).data;
  return [d[0] / 255, d[1] / 255, d[2] / 255];
}

/**
 * The design system's hero grid raised into 3D: a field of rounded blocks that
 * rolls like a slow sea, lifts under the pointer and dives as the page scrolls.
 * Reduced motion draws one still frame. Without WebGL the CSS grid stays visible.
 */
export function HeroField({
  paused,
  onReady,
}: {
  paused: boolean;
  onReady: () => void;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const [, setFailed] = useState(false);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let disposed = false;
    let teardown = () => {};

    (async () => {
      const THREE = await import("three");
      const { RoundedBoxGeometry } = await import("three/examples/jsm/geometries/RoundedBoxGeometry.js");
      if (disposed) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const small = window.innerWidth < 768;
      const COLS = small ? 26 : 48;
      const ROWS = small ? 18 : 28;
      const GAP = 1.14;

      let renderer: InstanceType<typeof THREE.WebGLRenderer>;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: "high-performance" });
      } catch {
        setFailed(true);
        return;
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.5 : 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 120);

      const geometry = new RoundedBoxGeometry(1, 1, 1, 2, 0.14);
      const material = new THREE.MeshStandardMaterial({ roughness: 0.38, metalness: 0.12 });
      const mesh = new THREE.InstancedMesh(geometry, material, COLS * ROWS);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      scene.add(mesh);

      const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 1.5);
      const key = new THREE.DirectionalLight(0xffffff, 2.6);
      key.position.set(-10, 18, 8);
      const rim = new THREE.PointLight(0xffffff, 260, 60);
      rim.position.set(0, 7, -2);
      scene.add(hemi, key, rim);

      const lit = new Uint8Array(COLS * ROWS);
      for (let i = 0; i < lit.length; i++) lit[i] = (i * 37) % 11 === 0 ? 1 : 0;

      const applyTheme = () => {
        const [br, bg, bb] = tokenRgb("--background");
        const [pr, pg, pb] = tokenRgb("--primary");
        const [sr, sg, sb] = tokenRgb("--secondary");
        const background = new THREE.Color().setRGB(br, bg, bb, THREE.SRGBColorSpace);
        const primary = new THREE.Color().setRGB(pr, pg, pb, THREE.SRGBColorSpace);
        const surface = new THREE.Color().setRGB(sr, sg, sb, THREE.SRGBColorSpace);
        scene.fog = new THREE.Fog(background, small ? 26 : 20, small ? 64 : 50);
        rim.color.copy(primary);
        for (let i = 0; i < lit.length; i++) mesh.setColorAt(i, lit[i] ? primary : surface);
        if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
      };
      applyTheme();

      const resize = () => {
        const { clientWidth: w, clientHeight: h } = host;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();

      const dummy = new THREE.Object3D();
      const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
      const ray = new THREE.Raycaster();
      const pointerNdc = new THREE.Vector2(0, 0.2);
      const hit = new THREE.Vector3();
      const focus = new THREE.Vector3();
      let hasPointer = false;
      let scroll = 0;

      const draw = (t: number) => {
        const p = scroll;
        camera.position.set(Math.sin(t * 0.08) * 1.4, 13 - p * 8.5, 21 - p * 15);
        camera.lookAt(0, 0, -3 - p * 10);
        camera.updateMatrixWorld();

        if (hasPointer) {
          ray.setFromCamera(pointerNdc, camera);
          if (ray.ray.intersectPlane(plane, hit)) focus.lerp(hit, 0.08);
        } else {
          focus.set(Math.sin(t * 0.35) * 12, 0, Math.cos(t * 0.27) * 7);
        }

        for (let z = 0; z < ROWS; z++) {
          for (let x = 0; x < COLS; x++) {
            const i = z * COLS + x;
            const px = (x - COLS / 2) * GAP;
            const pz = (z - ROWS / 2) * GAP - 4;
            const dist = Math.hypot(px - focus.x, pz - focus.z);
            const swell = Math.sin(px * 0.28 + t * 0.7) * 0.75 + Math.cos(pz * 0.34 - t * 0.55) * 0.75;
            const lift = Math.exp(-(dist * dist) / 26) * 4.2;
            const accent = lit[i] ? Math.sin(t * 0.9 + i) * 0.5 + 0.9 : 0;
            dummy.position.set(px, swell + lift + accent, pz);
            dummy.scale.set(1, 1 + (lift + accent) * 0.4, 1);
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
          }
        }
        mesh.instanceMatrix.needsUpdate = true;
        renderer.render(scene, camera);
      };

      const onPointer = (e: PointerEvent) => {
        if (e.pointerType === "touch") return;
        const r = host.getBoundingClientRect();
        pointerNdc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
        hasPointer = true;
      };
      const onScroll = () => {
        const h = host.clientHeight || 1;
        scroll = Math.min(Math.max(window.scrollY / h, 0), 1);
      };
      const scheme = window.matchMedia("(prefers-color-scheme: dark)");
      let clock = 0;
      const redraw = () => draw(reduced ? 4 : clock);
      const onScheme = () => {
        applyTheme();
        redraw();
      };

      let visible = true;
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
      });
      observer.observe(host);
      const sizer = new ResizeObserver(() => {
        resize();
        redraw();
      });
      sizer.observe(host);
      scheme.addEventListener("change", onScheme);

      let frame = 0;
      let last = performance.now();
      if (reduced) {
        draw(4);
      } else {
        window.addEventListener("pointermove", onPointer, { passive: true });
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        const loop = (now: number) => {
          frame = requestAnimationFrame(loop);
          const delta = Math.min((now - last) / 1000, 0.1);
          last = now;
          if (!visible || document.hidden || pausedRef.current) return;
          clock += delta;
          draw(clock);
        };
        draw(0);
        frame = requestAnimationFrame(loop);
      }
      onReady();

      teardown = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener("pointermove", onPointer);
        window.removeEventListener("scroll", onScroll);
        scheme.removeEventListener("change", onScheme);
        observer.disconnect();
        sizer.disconnect();
        geometry.dispose();
        material.dispose();
        mesh.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      teardown();
    };
  }, [onReady]);

  return <div ref={hostRef} className="hero-canvas" aria-hidden="true" />;
}
