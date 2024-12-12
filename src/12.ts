// import { testInput as input } from "./12-input";
import { input } from "./12-input";
import {
  neighbors4,
  posFromString,
  posToString,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  let first = 0;
  let second = 0;
  for (let y = 0; y < parsed.length; y++) {
    for (let x = 0; x < parsed[y].length; x++) {
      const char = parsed[y][x];
      if (char === " ") {
        continue;
      }
      const startPos = { x, y };
      const toExamine = [startPos];
      const found = new Set<string>([posToString(startPos)]);
      const fences: IFence[] = [];
      while (toExamine.length > 0) {
        const curr = toExamine.pop()!;
        neighbors4(curr).forEach((pos) => {
          if (valueInMap(parsed)(pos) === char) {
            const posS = posToString(pos);
            if (!found.has(posS)) {
              toExamine.push(pos);
              found.add(posS);
            }
          } else {
            if (pos.x !== curr.x) {
              fences.push({
                from: pos.y,
                to: pos.y + 1,
                inOut: `h${curr.x}|${pos.x}`,
              });
            } else {
              fences.push({
                from: pos.x,
                to: pos.x + 1,
                inOut: `v${curr.y}|${pos.y}`,
              });
            }
          }
        });
      }
      first += found.size * fences.length;
      second += found.size * mergeFences(fences);
      found.forEach((posS) => {
        const pos = posFromString(posS);
        parsed[pos.y][pos.x] = " ";
      });
    }
  }
  console.log(first, second);
}

interface IFence {
  from: number;
  to: number;
  inOut: string;
}

function mergeFences(fences: IFence[]) {
  const grouped = fences.reduce(function (rv, x) {
    if (!rv.has(x.inOut)) rv.set(x.inOut, []);
    rv.get(x.inOut)!.push(x);
    return rv;
  }, new Map<string, IFence[]>());
  let count = 0;

  grouped.forEach((fences) => {
    const sorted = fences.sort((a, b) => a.from - b.from);
    let last = Number.MIN_SAFE_INTEGER;
    let localCount = 0;
    sorted.forEach((fence) => {
      if (fence.from !== last) {
        count++;
        localCount++;
      }
      last = fence.to;
    });
  });
  return count;
}
