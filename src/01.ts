// import { testInput as input } from "./01-input";
import { input } from "./01-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input
    .split(`\n`)
    .map((line) => line.split("   ").map((num) => parseInt(num, 10)));
  const left = parsed.map((line) => line[0]).sort((a, b) => a - b);
  const right = parsed.map((line) => line[1]).sort((a, b) => a - b);
  let first = 0;
  for (let i = 0; i < left.length; i++) {
    first += Math.abs(left[i] - right[i]);
  }

  const rightSet = new Map<number, number>();
  for (let i = 0; i < right.length; i++) {
    rightSet.set(right[i], (rightSet.get(right[i]) || 0) + 1);
  }
  let second = 0;
  for (let i = 0; i < left.length; i++) {
    const l = left[i];
    second += l * (rightSet.get(l) ?? 0);
  }

  console.log(first, second);
}
