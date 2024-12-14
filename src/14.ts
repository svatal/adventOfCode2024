// import { testInput as input } from "./14-input";
import { input } from "./14-input";
import { IPosition, plus, posToString, times } from "./utils/position2D";
import { logEvery } from "./utils/log";

export function doIt(progress: (...params: any[]) => void) {
  // const w = 11;
  // const h = 7;
  const w = 101;
  const h = 103;
  const wm = (w - 1) / 2;
  const hm = (h - 1) / 2;

  const parsed = input.split(`\n`).map((line) => {
    const [_, px, py, vx, vy] = line
      .match(/p=(.+),(.+) v=(.+),(.+)/)!
      .map((n) => +n);
    return { position: { x: px, y: py }, velocity: { x: vx + w, y: vy + h } };
  });

  const f100 = parsed
    .map(({ position, velocity }) =>
      div(plus(position, times(velocity, 100)), w, h)
    )
    .reduce(
      (acc, { x, y }) => {
        if (x < wm && y < hm) acc.ll++;
        if (x < wm && y > hm) acc.lh++;
        if (x > wm && y < hm) acc.hl++;
        if (x > wm && y > hm) acc.hh++;
        return acc;
      },
      { ll: 0, lh: 0, hl: 0, hh: 0 }
    );
  const first = f100.ll * f100.lh * f100.hl * f100.hh;

  let i = 0;
  let iter = parsed;
  let err = Number.MAX_SAFE_INTEGER;
  while (true) {
    i++;
    iter = iter.map(({ position, velocity }) => ({
      position: div(plus(position, velocity), w, h),
      velocity,
    }));
    const map = iter.map(({ position }) => position);
    //   .map(({ x, y }) => ({ x: Math.abs(x - wm), y }))
    //   .filter(({ x }) => x !== 0)
    //   .map(posToString)
    //   .reduce(
    //     (acc, a) => acc.set(a, (acc.get(a) ?? 0) + 1),
    //     new Map<string, number>()
    //   );
    // const cErr = [...map.values()].filter((v) => v % 2 === 1).length;
    let cErr = 0;
    map.forEach((pos, i) => {
      map.slice(i + 1).forEach((pos2) => {
        cErr += Math.abs(pos.x - pos2.x) + Math.abs(pos.y - pos2.y);
      });
    });

    err = Math.min(err, cErr);
    progress(i, err, cErr);
    if (err === 5013062) break;
  }
  const second = i;
  console.log(first, second);
}

function div(pos: IPosition, w: number, h: number) {
  return { x: pos.x % w, y: pos.y % h };
}