// import { testInput as input } from "./08-input";
import { input } from "./08-input";
import {
  existIn,
  IPosition,
  minus,
  plus,
  posFromString,
  posToString,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  const antenas = new Map<string, IPosition[]>();
  parsed.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (cell !== ".") {
        const current = antenas.get(cell) || [];
        current.push({ x, y });
        antenas.set(cell, current);
      }
    });
  });

  const antinodes = new Set<string>();
  antenas.forEach((positions) => {
    positions.forEach((pos1, i) => {
      positions.slice(i + 1).forEach((pos2) => {
        const diff = minus(pos1, pos2);
        antinodes.add(posToString(plus(pos1, diff)));
        antinodes.add(posToString(minus(pos2, diff)));
      });
    });
  });
  const first = [...antinodes].filter((pos) =>
    existIn(parsed)(posFromString(pos))
  ).length;

  const antinodes2 = new Set<string>();
  antenas.forEach((positions) => {
    positions.forEach((pos1, i) => {
      positions.slice(i + 1).forEach((pos2) => {
        const diff = minus(pos1, pos2);
        let pos = pos1;
        do {
          antinodes2.add(posToString(pos));
          pos = plus(pos, diff);
        } while (existIn(parsed)(pos));
        pos = { ...pos1 };
        do {
          antinodes2.add(posToString(pos));
          pos = minus(pos, diff);
        } while (existIn(parsed)(pos));
      });
    });
  });

  const second = antinodes2.size;
  console.log(first, second);
}
