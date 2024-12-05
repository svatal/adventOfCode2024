// import { testInput as input } from "./05-input";
import { input } from "./05-input";

export function doIt(progress: (...params: any[]) => void) {
  const [restrictionsS, updatesS] = input.split(`\n\n`);
  const disallowed = restrictionsS
    .split(`\n`)
    .map((line) => line.split("|"))
    .reduce(
      (set, [first, second]) => set.add(`${second}|${first}`),
      new Set<string>()
    );
  const updates = updatesS.split(`\n`).map((line) => line.split(","));
  const first = updates
    .filter((line) => test(line, disallowed))
    .reduce((acc, line) => acc + +line[Math.floor(line.length / 2)], 0);
  const second = updates
    .filter((line) => !test(line, disallowed))
    .map((line) => reorder(line, disallowed))
    .reduce((acc, line) => acc + +line[Math.floor(line.length / 2)], 0);
  console.log(first, second);
}

function test(arr: string[], disallowed: Set<string>) {
  return arr.every((a, i) =>
    arr.slice(i).every((b) => !disallowed.has(`${a}|${b}`))
  );
}

function reorder(arr: string[], disallowed: Set<string>) {
  const input = [...arr];
  let result: string[] = [];
  while (input.length) {
    const idx = input.findIndex((v) =>
      input.every((n) => !disallowed.has(`${v}|${n}`))
    );
    result.push(input.splice(idx, 1)[0]);
  }
  return result;
}
