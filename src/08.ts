// import { testInput as input } from "./08-input";
import { input } from "./08-input";
import {
  existIn,
  IPosition,
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
        const dx = pos1.x - pos2.x;
        const dy = pos1.y - pos2.y;
        antinodes.add(posToString({ x: pos1.x + dx, y: pos1.y + dy }));
        antinodes.add(posToString({ x: pos2.x - dx, y: pos2.y - dy }));
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
        let dx = pos1.x - pos2.x;
        let dy = pos1.y - pos2.y;
        let pos = { ...pos1 };
        do {
          antinodes2.add(posToString(pos));
          pos.x += dx;
          pos.y += dy;
        } while (existIn(parsed)(pos));
        pos = { ...pos1 };
        do {
          antinodes2.add(posToString(pos));
          pos.x -= dx;
          pos.y -= dy;
        } while (existIn(parsed)(pos));
      });
    });
  });

  const second = antinodes2.size;
  console.log(first, second);
}
