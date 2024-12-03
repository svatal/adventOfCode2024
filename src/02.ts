// import { testInput as input } from "./02-input";
import { input } from "./02-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input
    .split(`\n`)
    .map((line) => line.split(" ").map((num) => parseInt(num, 10)));
  const first = parsed.filter(isSafe).length;
  const second = parsed.filter(isSafe2).length;
  console.log(first, second);
}

function isSafe(arr: number[]) {
  const diffs = arr.slice(1).map((n, i) => n - arr[i]);
  const res = allIsOneToThree(diffs) || allIsOneToThree(diffs.map((n) => -n));
  // console.log("testing", arr, res);
  return res;
}

function allIsOneToThree(diffs: number[]) {
  return diffs.every((n) => n > 0 && n <= 3);
}

function isSafe2(arr: number[]) {
  if (isSafe(arr)) return true;
  for (let i = 0; i < arr.length; i++) {
    if (isSafe([...arr.slice(0, i), ...arr.slice(i + 1)])) return true;
  }
  return false;
}
