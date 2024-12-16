// import { testInput as input } from "./16-input";
import { input } from "./16-input";
import {
  Direction,
  followDirection,
  IPosition,
  posToString,
  toLeft,
  toRight,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  let s = { x: 0, y: 0 };
  let e = { x: 0, y: 0 };
  let dir: Direction = ">";
  parsed.forEach((line, y) =>
    line.forEach((cell, x) => {
      if (cell === "S") {
        s = { x, y };
      } else if (cell === "E") {
        e = { x, y };
      }
    })
  );

  const visited = new Map<string, { steps: number; tiles: Set<string> }>([
    [print(s, dir), { steps: 0, tiles: new Set([posToString(s)]) }],
  ]);
  const queue: { pos: IPosition; dir: Direction; steps: number }[] = [
    { pos: s, dir, steps: 0 },
  ];
  let bestSteps = Number.MAX_SAFE_INTEGER;
  while (queue.length) {
    const { pos, dir, steps } = queue.shift()!;
    if (steps > bestSteps) {
      break;
    }
    if (valueInMap(parsed)(pos) === "E") {
      bestSteps = steps;
      continue;
    }
    const tiles = visited.get(print(pos, dir))!.tiles;
    let next = [
      { pos: followDirection(pos, dir), dir, steps: steps + 1 },
      { pos, dir: toLeft(dir), steps: steps + 1000 },
      { pos, dir: toRight(dir), steps: steps + 1000 },
    ];
    if (valueInMap(parsed)(next[0].pos) === "#") {
      next = next.slice(1);
    }

    next.forEach(({ pos, dir, steps }) => {
      const key = print(pos, dir);
      const prevVisited = visited.get(key);
      if (prevVisited !== undefined) {
        if (prevVisited.steps <= steps) {
          if (prevVisited.steps === steps) {
            prevVisited.tiles = new Set([...prevVisited.tiles, ...tiles]);
          }
          return;
        }
        const prevQueueIndex = queue.findIndex(
          (q) => q.pos.x === pos.x && q.pos.y === pos.y && q.dir === dir
        );
        if (prevQueueIndex !== -1) {
          queue.splice(prevQueueIndex, 1);
        }
      }
      visited.set(key, { steps, tiles: new Set([...tiles, posToString(pos)]) });
      const beforeIdx = queue.findIndex((q) => q.steps > steps);
      if (beforeIdx >= 0) {
        queue.splice(beforeIdx, 0, { pos, dir, steps });
      } else {
        queue.push({ pos, dir, steps });
      }
    });
  }

  const first = bestSteps;
  const endKey = print(e, ">").slice(0, -1);
  const second = [...visited.entries()]
    .filter(([k]) => k.startsWith(endKey))
    .map(([k, v]) => v.tiles)
    .reduce((a, b) => new Set([...a, ...b]), new Set<string>()).size;
  console.log(first, second);
}

function print(pos: IPosition, dir: Direction) {
  return `${posToString(pos)}|${dir}`;
}
