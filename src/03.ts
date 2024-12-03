// import { testInput as input } from "./03-input";
import { input } from "./03-input";

export function doIt(progress: (...params: any[]) => void) {
  const re = /mul\(([0-9]+),([0-9]+)\)|do\(\)|don't\(\)/g;
  let match;
  let first = 0;
  let second = 0;
  let enabled = true;
  while ((match = re.exec(input))) {
    switch (match[0]) {
      case "do()":
        enabled = true;
        continue;
      case "don't()":
        enabled = false;
        continue;
      default:
        const mul = Number(match[1]) * Number(match[2]);
        first += mul;
        if (enabled) second += mul;
    }
  }
  console.log(first, second);
}
