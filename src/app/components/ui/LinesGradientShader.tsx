"use client";

import { useEffect, useRef } from "react";

const VERT = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `
precision highp float;

uniform float u_time;
uniform vec2  u_resolution;
uniform float u_dark;

#define PI 3.141592653589793
#define LINES 12.0
#define SPEED 0.3

// Smooth noise
float hash(float n) { return fract(sin(n) * 43758.5453123); }
float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  float u = f * f * (3.0 - 2.0 * f);
  return mix(hash(i), hash(i + 1.0), u);
}

float line(vec2 uv, float idx, float glowStr) {
  float t   = u_time * SPEED + idx * 0.37;
  float freq = 1.8 + idx * 0.2;
  float amp  = 0.06 + 0.04 * sin(idx * 1.3);

  // Base sine wave
  float wave = sin(uv.x * freq * PI * 2.0 + t) * amp;
  // Add noise wrinkle
  wave += noise(uv.x * 3.0 + t * 0.7 + idx * 5.0) * 0.025;

  float y = (idx / LINES) + wave;
  float dist = abs(uv.y - y);

  // Glow falloff — softer in light mode
  float glow = exp(-dist * 180.0) * 0.9 * glowStr
             + exp(-dist * 60.0)  * 0.4 * glowStr;
  return glow;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_resolution;
  uv.y = 1.0 - uv.y; // flip Y

  // Glow strength: full in dark, reduced in light
  float glowStr = mix(0.45, 1.0, u_dark);

  // Brand palette: teal → electric blue → emerald → muted violet
  // In light mode, shift to softer/brighter pastels
  vec3 col1 = mix(vec3(0.4, 0.9, 0.8),  vec3(0.0,  0.831, 0.667), u_dark);
  vec3 col2 = mix(vec3(0.45, 0.7, 0.95), vec3(0.12, 0.56,  0.95),  u_dark);
  vec3 col3 = mix(vec3(0.5, 0.88, 0.72), vec3(0.20, 0.82,  0.60),  u_dark);
  vec3 col4 = mix(vec3(0.6, 0.5, 0.85),  vec3(0.38, 0.22,  0.72),  u_dark);

  vec3 color = vec3(0.0);

  for (float i = 0.0; i < LINES; i++) {
    float n = i / LINES;
    float glow = line(uv, i + 0.5, glowStr);

    // Mix palette by line index + time drift
    float t    = n + sin(u_time * 0.15 + i * 0.8) * 0.3;
    t = fract(t);
    vec3 lineCol;
    if (t < 0.33) lineCol = mix(col1, col2, t / 0.33);
    else if (t < 0.66) lineCol = mix(col2, col3, (t - 0.33) / 0.33);
    else lineCol = mix(col3, col4, (t - 0.66) / 0.34);

    color += lineCol * glow;
  }

  // Vignette
  vec2 vig = uv - 0.5;
  float v = 1.0 - dot(vig, vig) * 1.8;
  color *= clamp(v, 0.0, 1.0);

  // Background bleed — dark mode bleeds to black, light mode stays transparent
  float luminance = dot(color, vec3(0.299, 0.587, 0.114));
  color = mix(vec3(0.0), color, smoothstep(0.0, 0.3, luminance));

  // Alpha: lower in light mode to keep text readable
  float alpha = mix(0.35, 0.7, u_dark);
  gl_FragColor = vec4(color, alpha);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type)!;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.error("Shader error:", gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function createProgram(gl: WebGLRenderingContext, vert: string, frag: string) {
  const v = createShader(gl, gl.VERTEX_SHADER, vert);
  const f = createShader(gl, gl.FRAGMENT_SHADER, frag);
  if (!v || !f) return null;
  const p = gl.createProgram()!;
  gl.attachShader(p, v);
  gl.attachShader(p, f);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.error("Program error:", gl.getProgramInfoLog(p));
    return null;
  }
  return p;
}

export function LinesGradientShader({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false });
    if (!gl) return;

    const program = createProgram(gl, VERT, FRAG);
    if (!program) return;

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, -1, 1, 1, -1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc  = gl.getAttribLocation(program, "position");
    const timeLoc = gl.getUniformLocation(program, "u_time");
    const resLoc  = gl.getUniformLocation(program, "u_resolution");
    const darkLoc = gl.getUniformLocation(program, "u_dark");

    gl.useProgram(program);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // Enable alpha blending
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Detect dark mode
    let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches ? 1.0 : 0.0;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onThemeChange = (e: MediaQueryListEvent) => { isDark = e.matches ? 1.0 : 0.0; };
    mq.addEventListener("change", onThemeChange);

    let raf: number;
    let start = performance.now();

    const resize = () => {
      canvas.width  = canvas.offsetWidth  * devicePixelRatio;
      canvas.height = canvas.offsetHeight * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const render = () => {
      const t = (performance.now() - start) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLoc, t);
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(darkLoc, isDark);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      mq.removeEventListener("change", onThemeChange);
      gl.deleteProgram(program);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
