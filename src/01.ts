// import { testInput as input } from "./01-input";
import { input } from "./01-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input
    .split(`\n`)
    .map((line) => line.split("   ").map((num) => parseInt(num, 10)));
  const left = parsed.map((line) => line[0]).sort((a, b) => a - b);
  const right = parsed.map((line) => line[1]).sort((a, b) => a - b);

  const first = left.reduce((acc, l, i) => acc + Math.abs(l - right[i]), 0);

  const rightSet = right.reduce(
    (acc, r) => acc.set(r, (acc.get(r) ?? 0) + 1),
    new Map<number, number>()
  );
  const second = left.reduce((acc, l) => acc + (rightSet.get(l) ?? 0) * l, 0);

  console.log(first, second);
}
