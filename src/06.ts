// import { testInput as input } from "./06-input";
import { input } from "./06-input";
import {
  Direction,
  followDirection,
  IPosition,
  posFromString,
  posToString,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const maze = input.split(`\n`).map((line) => line.split(""));
  let position: IPosition = { x: 0, y: 0 };
  let direction: Direction = "^";
  maze.forEach((line, y) => {
    line.forEach((cell, x) => {
      if (cell === "^") {
        position = { x, y };
      }
    });
  });

  const [visited, _] = exploreMaze(maze, position, direction);
  const first = visited.size;

  let second = 0;
  visited.forEach((posS) => {
    const { x, y } = posFromString(posS);
    const newMaze = [...maze];
    newMaze[y] = [...newMaze[y]];
    newMaze[y][x] = "#";
    const [_, loop] = exploreMaze(newMaze, position, direction);
    second += loop ? 1 : 0;
  });

  console.log(first, second);
}

function exploreMaze(
  maze: string[][],
  position: IPosition,
  direction: Direction
): [Set<string>, boolean] {
  const visited = new Set<string>();
  const visitedDirs = new Set<string>();
  while (true) {
    visited.add(posToString(position));
    const visitedDir = posToString(position) + direction;
    if (visitedDirs.has(visitedDir)) {
      return [visited, true];
    }
    visitedDirs.add(visitedDir);
    const nextPos = followDirection(position, direction);
    const nextCell = valueInMap(maze)(nextPos);
    if (nextCell === undefined) {
      return [visited, false];
    }
    if (nextCell === "#") {
      direction = turnRight(direction);
      continue;
    }
    position = nextPos;
  }
}

function turnRight(direction: Direction): Direction {
  switch (direction) {
    case "^":
      return ">";
    case ">":
      return "v";
    case "v":
      return "<";
    case "<":
      return "^";
  }
}
