import { type ReactNode } from "react";

/** One marquee row. Repeats its items so a half-track is wider than any screen. */
export function InfiniteMovingCards({
  items,
  paused,
  reverse = false,
  repeat = 1,
  seconds = 50,
}: {
  items: { content: ReactNode; key: string }[];
  paused: boolean;
  reverse?: boolean;
  repeat?: number;
  seconds?: number;
}) {
  const sets = repeat * 2;
  return (
    <div className="marquee relative overflow-hidden py-1">
      <ul
        className="marquee-track flex w-max min-w-full shrink-0 gap-4"
        data-paused={paused}
        style={{ animationDuration: `${seconds}s`, animationDirection: reverse ? "reverse" : "normal" }}
      >
        {Array.from({ length: sets }, (_, set) =>
          items.map((item) => (
            <li
              key={`${item.key}-${set}`}
              className={`shrink-0 ${set === 0 ? "" : "marquee-clone"}`}
              aria-hidden={set === 0 ? undefined : true}
            >
              {item.content}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
