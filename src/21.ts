// import { testInput as input } from "./21-input";
import { input } from "./21-input";

export function doIt(progress: (...params: any[]) => void) {
  const lines = input.split(`\n`);
  const codes = lines.map((line) => line.split("") as Code[]);
  const first = codes
    .map(codeToMoves)
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => Math.min(...moves.map((d) => d.length)))
    .reduce((a, b, i) => a + b * parseInt(lines[i]), 0);
  // for (let i = 0; i < codes.length; i++) {
  //   let x = codeToMoves(codes[i]);
  //   for (let j = 0; j < 25; j++) {
  //     x = x.flatMap(dirToMoves);
  //     progress(i, j, x.length, x[0].length);
  //   }
  // }
  const second = codes
    .map(codeToMoves)
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => moves.flatMap(dirToMoves))
    .map((moves) => Math.min(...moves.map((d) => d.length)))
    .reduce((a, b, i) => a + b * parseInt(lines[i]), 0);
  console.log(first, second);
}

function codeToMoves(code: Code[]) {
  const start = codeToPos["A"];
  const targets = code.map((c) => codeToPos[c]);
  const moves = targets
    .map((target, i) => {
      const prev = i === 0 ? start : targets[i - 1];
      let dx = target.x - prev.x;
      let dy = target.y - prev.y;
      const dxP = dx > 0 ? ">".repeat(dx) : "";
      const dyP = dy > 0 ? "v".repeat(dy) : "";
      const dxN = dx < 0 ? "<".repeat(-dx) : "";
      const dyN = dy < 0 ? "^".repeat(-dy) : "";
      if (
        Math.min(target.x, prev.x) === 0 &&
        Math.max(target.y, prev.y) === 3
      ) {
        // do not start with dxN or dyP
        return [`${dxP}${dyN}${dxN}${dyP}A`];
      }
      const x = `${dxP}${dxN}`;
      const y = `${dyP}${dyN}`;
      if (x.length === 0 || y.length === 0) {
        return [`${x}${y}A`];
      }
      return [`${x}${y}A`, `${y}${x}A`];
    })
    .map((m) => m.map((m2) => m2.split("") as Dir[]));
  return moves.reduce(
    (acc, val) => acc.flatMap((c) => val.map((v) => [...c, ...v])),
    [[]] as Dir[][]
  );
}

const codeToPos = {
  "7": { x: 0, y: 0 },
  "8": { x: 1, y: 0 },
  "9": { x: 2, y: 0 },
  "4": { x: 0, y: 1 },
  "5": { x: 1, y: 1 },
  "6": { x: 2, y: 1 },
  "1": { x: 0, y: 2 },
  "2": { x: 1, y: 2 },
  "3": { x: 2, y: 2 },
  "0": { x: 1, y: 3 },
  A: { x: 2, y: 3 },
};
type Code = keyof typeof codeToPos;

function dirToMoves(dirs: Dir[]) {
  const start = dirToPos["A"];
  const targets = dirs.map((c) => dirToPos[c]);
  const moves = targets
    .map((target, i) => {
      const prev = i === 0 ? start : targets[i - 1];
      let dx = target.x - prev.x;
      let dy = target.y - prev.y;
      const dxP = dx > 0 ? ">".repeat(dx) : "";
      const dyP = dy > 0 ? "v".repeat(dy) : "";
      const dxN = dx < 0 ? "<".repeat(-dx) : "";
      const dyN = dy < 0 ? "^".repeat(-dy) : "";
      if (
        Math.min(target.x, prev.x) === 0 &&
        Math.min(target.y, prev.y) === 0
      ) {
        // do not start with dxN or dyN
        return [`${dxP}${dyP}${dxN}${dyN}A`];
      }
      const x = `${dxP}${dxN}`;
      const y = `${dyP}${dyN}`;
      if (x.length === 0 || y.length === 0) {
        return [`${x}${y}A`];
      }
      return [`${x}${y}A`, `${y}${x}A`];
      // return [`${x}${y}A`];
    })
    .map((m) => m.map((m2) => m2.split("") as Dir[]));
  const variants = moves.reduce(
    (acc, val) => acc.flatMap((c) => val.map((v) => [...c, ...v])),
    [[]] as Dir[][]
  );
  let minLength = Number.MAX_SAFE_INTEGER;
  variants.forEach((v) => {
    if (v.length < minLength) {
      minLength = v.length;
    }
  });
  return variants.filter((v) => v.length === minLength);
}

const dirToPos = {
  "^": { x: 1, y: 0 },
  A: { x: 2, y: 0 },
  "<": { x: 0, y: 1 },
  v: { x: 1, y: 1 },
  ">": { x: 2, y: 1 },
};
type Dir = keyof typeof dirToPos;
