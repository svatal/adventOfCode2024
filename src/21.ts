// import { testInput as input } from "./21-input";
import { input } from "./21-input";

export function doIt(progress: (...params: any[]) => void) {
  const lines = input.split(`\n`);
  const codes = lines.map((line) => line.split("") as Code[]);
  const first = codes
    .map(codeToMoves)
    .map((moves) => moves.flatMap((m) => dirToMoves2(m, 2)))
    .map((moves) => Math.min(...moves))
    .reduce((a, b, i) => a + b * parseInt(lines[i]), 0);

  const second = codes
    .map(codeToMoves)
    .map((moves) => moves.flatMap((m) => dirToMoves2(m, 25)))
    .map((moves) => Math.min(...moves))
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

const cache = new Map<string, number>();

function dirToMoves2(dirs: Dir[], times: number): number {
  if (times === 0) {
    return dirs.length;
  }
  const start = dirToPos["A"];
  const targets = dirs.map((c) => dirToPos[c]);
  const moves = targets
    .map((target, i) => {
      const prev = i === 0 ? start : targets[i - 1];
      const cacheKey = `${i === 0 ? "A" : dirs[i - 1]}-${dirs[i]}-${times - 1}`;
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey)!;
      }
      let dx = target.x - prev.x;
      let dy = target.y - prev.y;
      const dxP = dx > 0 ? ">".repeat(dx) : "";
      const dyP = dy > 0 ? "v".repeat(dy) : "";
      const dxN = dx < 0 ? "<".repeat(-dx) : "";
      const dyN = dy < 0 ? "^".repeat(-dy) : "";

      let str: string[] = [];
      if (
        Math.min(target.x, prev.x) === 0 &&
        Math.min(target.y, prev.y) === 0
      ) {
        // do not start with dxN or dyN
        str = [`${dxP}${dyP}${dxN}${dyN}A`];
      } else {
        const x = `${dxP}${dxN}`;
        const y = `${dyP}${dyN}`;
        if (x.length === 0 || y.length === 0) {
          str = [`${x}${y}A`];
        }
        str = [`${x}${y}A`, `${y}${x}A`];
      }
      const len = Math.min(
        ...str.map((s) => dirToMoves2(s.split("") as Dir[], times - 1))
      );
      cache.set(cacheKey, len);
      return len;
    })
    .reduce((a, b) => a + b, 0);
  return moves;
}

const dirToPos = {
  "^": { x: 1, y: 0 },
  A: { x: 2, y: 0 },
  "<": { x: 0, y: 1 },
  v: { x: 1, y: 1 },
  ">": { x: 2, y: 1 },
};
type Dir = keyof typeof dirToPos;
