// import { testInput as input } from "./20-input";
import { input } from "./20-input";
import {
  IPosition,
  neighbors4,
  posToString,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  parsed.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (cell === "S") {
        start = { x, y };
      } else if (cell === "E") {
        end = { x, y };
      }
    });
  });
  const path = getPath(parsed, start, end);
  const first = countCheats(path, 2);
  const second = countCheats(path, 20);
  console.log(first, second);
}

function countCheats(path: IPosition[], maxCheatSteps: number): number {
  return path
    .map(
      (pos, i) =>
        path
          .slice(i + 100)
          .map((pos2) => Math.abs(pos2.x - pos.x) + Math.abs(pos2.y - pos.y))
          .filter(
            (cheatSteps, j) =>
              cheatSteps <= maxCheatSteps && j - cheatSteps >= 0
          ).length
    )
    .reduce((a, b) => a + b, 0);
}

function getPath(
  maze: string[][],
  start: IPosition,
  end: IPosition
): IPosition[] {
  const queue = [{ pos: start, path: [start] }];
  const visited = new Set<string>();
  visited.add(posToString(start));

  while (queue.length) {
    const { pos, path } = queue.shift()!;
    if (pos.x === end.x && pos.y === end.y) {
      return path;
    }

    for (const next of neighbors4(pos)) {
      const nextCell = valueInMap(maze)(next);
      if (
        nextCell === undefined ||
        nextCell === "#" ||
        visited.has(posToString(next))
      ) {
        continue;
      }
      visited.add(posToString(next));
      queue.push({ pos: next, path: [...path, next] });
    }
  }
  return [];
}
