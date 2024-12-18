// import { testInput as input } from "./17-input";
import { input } from "./17-input";

export function doIt(progress: (...params: any[]) => void) {
  const [AS, BS, CS, _, ProgS] = input
    .split(`\n`)
    .map((line) => line.split(": ")[1]);
  const Prog = ProgS.split(",").map((v) => +v);

  console.log("first:", tryRun(+AS, +BS, +CS, Prog)?.join(","));

  // following is ok for the test input, but not for the real input

  // for (let A = 0; A < 64; A++) {
  //   const Aa = A * Math.pow(8, 10);
  //   const result = tryRun(Aa, +BS, +CS, Prog);
  //   console.log(Aa.toString(8), result);
  // }
  // let second = 0;
  // while (true) {
  //   try {
  //     const result = tryRun(second, +BS, +CS, Prog, true);
  //     if (result !== null) {
  //       console.log(result);
  //       console.log(second);
  //       break;
  //     }
  //   } catch (e) {}
  //   second++;
  //   progress(second);
  // }

  let As = [0];
  for (var i = 0; i < Prog.length; i++) {
    const next = [];
    for (var ai = 0; ai < As.length; ai++) {
      let A = As[ai];
      for (var j = 0; j < 8; j++) {
        const result = tryRun(A, +BS, +CS, Prog)!;
        if (
          result.slice(Prog.length - 1 - i).join("") ===
          Prog.slice(Prog.length - 1 - i).join("")
        ) {
          next.push(A);
        }
        A += Math.pow(8, Prog.length - 1 - i);
      }
    }
    As = next;
  }
  console.log("second: ", Math.min(...As));
}

function tryRun(
  A: number,
  B: number,
  C: number,
  Prog: number[],
  validate = false
) {
  let pointer = 0;
  const out: number[] = [];

  function combo(n: number) {
    if (n < 4) return n;
    switch (n) {
      case 4:
        return A;
      case 5:
        return B;
      case 6:
        return C;
      default:
        throw new Error(`unknown combo ${n}`);
    }
  }

  while (pointer < Prog.length) {
    const cmd = Prog[pointer++];
    const operand = Prog[pointer++];
    // console.log({ cmd, operand, pointer: pointer - 2, A, B, C });
    switch (cmd) {
      case 0: // adv
        A = Math.trunc(A / Math.pow(2, combo(operand)));
        break;
      case 1: // bxl
        B ^= operand;
        break;
      case 2: // bst
        B = combo(operand) % 8;
        break;
      case 3: // jnz
        if (A !== 0) {
          pointer = operand;
        }
        break;
      case 4: // bxc
        B ^= C % 8; // quick prevention of negative numbers
        break;
      case 5: // out
        out.push(combo(operand) % 8);
        // console.log(out);
        if (validate) {
          if (out[out.length - 1] !== Prog[out.length - 1]) return null;
        }
        break;
      case 6: // bdv
        B = Math.trunc(A / Math.pow(2, combo(operand)));
        break;
      case 7: // cdv
        C = Math.trunc(A / Math.pow(2, combo(operand)));
        break;
      default:
        throw new Error(`unknown command ${cmd}`);
    }
    if (A < 0 || B < 0 || C < 0) console.log(A, B, C, cmd, operand);
  }
  return !validate || out.length === Prog.length ? out : null;
}
