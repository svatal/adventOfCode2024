// import { testInput as input } from "./03-input";
import { input } from "./03-input";

export function doIt(progress: (...params: any[]) => void) {
  const re = /mul\(([0-9]+),([0-9]+)\)/g;
  let match;
  let first = 0;
  while ((match = re.exec(input))) {
    first += Number(match[1]) * Number(match[2]);
  }

  const re2 = /mul\(([0-9]+),([0-9]+)\)|do\(\)|don't\(\)/g;
  let match2;
  let second = 0;
  let enabled = true;
  while ((match2 = re2.exec(input))) {
    if (match2[0] === "do()") {
      enabled = true;
      continue;
    }
    if (match2[0] === "don't()") {
      enabled = false;
      continue;
    }
    if (enabled) {
      second += Number(match2[1]) * Number(match2[2]);
    }
  }
  console.log(first, second);
}
