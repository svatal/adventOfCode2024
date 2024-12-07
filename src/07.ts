// import { testInput as input } from "./07-input";
import { get } from "http";
import { input } from "./07-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => {
    const [res, ...operands] = line
      .replace(":", "")
      .split(" ")
      .map((n) => +n);
    return { res, operands };
  });

  const first = parsed
    .filter((line) => canMatch(line, (a, b) => [a + b, a * b]))
    .reduce((acc, line) => acc + line.res, 0);
  const second = parsed
    .filter((line) => canMatch(line, (a, b) => [a + b, a * b, +`${a}${b}`]))
    .reduce((acc, line) => acc + line.res, 0);
  console.log(first, second);
}

function canMatch(
  line: { res: number; operands: number[] },
  getPosibilities: (a: number, b: number) => number[]
): boolean {
  const { res, operands } = line;
  if (operands.length === 1) {
    return operands[0] === res;
  }
  const [op1, op2, ...rest] = operands;
  return getPosibilities(op1, op2).some((posibility) =>
    canMatch({ res, operands: [posibility, ...rest] }, getPosibilities)
  );
}
