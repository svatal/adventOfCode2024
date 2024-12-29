// import { testInput as input } from "./25-input";
import { input } from "./25-input";

export function doIt(progress: (...params: any[]) => void) {
  const keys: number[][] = [];
  const locks: number[][] = [];
  input.split(`\n\n`).forEach((blueprint) => {
    const rows = blueprint.split(`\n`);
    const heights = rows[0]
      .split("")
      .map(
        (_, index) =>
          rows.map((row) => row[index]).filter((char) => char === `#`).length -
          1
      );
    if (rows[0][0] === "#") locks.push(heights);
    else keys.push(heights);
  });
  const first = keys
    .map(
      (key) =>
        locks.filter((lock) => lock.every((lh, i) => lh + key[i] <= 5)).length
    )
    .reduce((a, b) => a + b, 0);
  console.log(first);
}
