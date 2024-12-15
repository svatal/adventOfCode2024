// import { testInput as input } from "./15-input";
import { input } from "./15-input";
import {
  Direction,
  followDirection,
  IPosition,
  posFromString,
  posToString,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const [mazeS, dirsS] = input.split(`\n\n`);
  const dirs = dirsS.replace(/\n/g, "").split(``) as Direction[];
  const first = do1(mazeS, dirs);
  const second = do2(mazeS, dirs);
  console.log(first, second);
}

function getMovables(maze: string[][]) {
  const boxes = new Set<string>();
  let robot: IPosition = { x: 0, y: 0 };
  maze.forEach((row, y) =>
    row.forEach((cell, x) => {
      if (cell === "O") boxes.add(posToString({ x, y }));
      else if (cell === `@`) robot = { x, y };
    })
  );
  return { boxes, robot };
}

function getGps(boxes: Set<string>) {
  return [...boxes]
    .map(posFromString)
    .reduce((acc, pos) => acc + pos.x + 100 * pos.y, 0);
}

function do1(mazeS: string, dirs: Direction[]) {
  const maze = mazeS.split(`\n`).map((row) => row.split(``));
  let { boxes, robot } = getMovables(maze);
  dirs.forEach((dir) => {
    const newPos = followDirection(robot, dir);
    if (tryMove(newPos, dir)) robot = newPos;
  });

  return getGps(boxes);

  function tryMove(pos: IPosition, dir: Direction) {
    if (valueInMap(maze)(pos) === `#`) return false;
    if (!boxes.has(posToString(pos))) return true;
    const newPos = followDirection(pos, dir);
    if (!tryMove(newPos, dir)) return false;
    boxes.delete(posToString(pos));
    boxes.add(posToString(newPos));
    return true;
  }
}

function do2(mazeS: string, dirs: Direction[]) {
  const maze = mazeS
    .split(`\n`)
    .map((row) =>
      row.replace(/./g, (m) => `${m}${m === "#" ? m : "."}`).split(``)
    );
  let { boxes, robot } = getMovables(maze);
  dirs.forEach((dir) => {
    const newPos = followDirection(robot, dir);
    if (tryMove(newPos, dir, false)) {
      tryMove(newPos, dir, true);
      robot = newPos;
    }
  });

  return getGps(boxes);

  function tryMove(pos: IPosition, dir: Direction, applyMove: boolean) {
    if (valueInMap(maze)(pos) === `#`) return false;
    if (dir === `v` || dir === `^`) {
      const boxAtPos = boxes.has(posToString(pos));
      const boxBeforePos = followDirection(pos, "<");
      const boxShadowAtPos = boxes.has(posToString(boxBeforePos));
      if (!boxAtPos && !boxShadowAtPos) return true; // only one can be true
      pos = boxAtPos ? pos : boxBeforePos;
      const newPos = followDirection(pos, dir);
      if (
        !tryMove(newPos, dir, applyMove) ||
        !tryMove(followDirection(newPos, ">"), dir, applyMove)
      )
        return false;
      if (applyMove) {
        boxes.delete(posToString(pos));
        boxes.add(posToString(newPos));
      }
      return true;
    } else {
      if (dir === ">") {
        if (!boxes.has(posToString(pos))) return true;
        const newPos = followDirection(pos, dir);
        // box is wider, we need to check +1 position
        if (!tryMove(followDirection(newPos, dir), dir, applyMove))
          return false;
        if (applyMove) {
          boxes.delete(posToString(pos));
          boxes.add(posToString(newPos));
        }
        return true;
      } else {
        pos = followDirection(pos, "<"); // repair pos for expected box position
        if (!boxes.has(posToString(pos))) return true;
        const newPos = followDirection(pos, dir);
        if (!tryMove(newPos, dir, applyMove)) return false;
        if (applyMove) {
          boxes.delete(posToString(pos));
          boxes.add(posToString(newPos));
        }
        return true;
      }
    }
  }
}
