// import { testInput as input } from "./04-input";
import { input } from "./04-input";
import { IPosition, valueInMap } from "./utils/position2D";
import { prefillArray } from "./utils/util";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  const reads = [
    ...prefillArray(parsed.length, (idx) => ({ x: 0, y: idx })).map(
      (startPos) => followDirection(parsed, startPos, 1, 0)
    ),
    ...prefillArray(parsed.length, (idx) => ({
      x: parsed[0].length - 1,
      y: idx,
    })).map((startPos) => followDirection(parsed, startPos, -1, 0)),
    ...prefillArray(parsed[0].length, (idx) => ({ x: idx, y: 0 })).map(
      (startPos) => followDirection(parsed, startPos, 0, 1)
    ),
    ...prefillArray(parsed[0].length, (idx) => ({
      x: idx,
      y: parsed.length - 1,
    })).map((startPos) => followDirection(parsed, startPos, 0, -1)),
    ...[
      ...prefillArray(parsed.length, (idx) => ({ x: 0, y: idx })),
      ...prefillArray(parsed[0].length - 1, (idx) => ({ x: idx + 1, y: 0 })),
    ].map((startPos) => followDirection(parsed, startPos, 1, 1)),
    ...[
      ...prefillArray(parsed.length, (idx) => ({
        x: parsed[0].length - 1,
        y: idx,
      })),
      ...prefillArray(parsed[0].length - 1, (idx) => ({
        x: idx,
        y: parsed.length - 1,
      })),
    ].map((startPos) => followDirection(parsed, startPos, -1, -1)),
    ...[
      ...prefillArray(parsed[0].length, (idx) => ({ x: idx, y: 0 })),
      ...prefillArray(parsed.length - 1, (idx) => ({
        x: parsed[0].length - 1,
        y: idx + 1,
      })),
    ].map((startPos) => followDirection(parsed, startPos, -1, 1)),
    ...[
      ...prefillArray(parsed[0].length, (idx) => ({
        x: idx,
        y: parsed.length - 1,
      })),
      ...prefillArray(parsed.length - 1, (idx) => ({ x: 0, y: idx })),
    ].map((startPos) => followDirection(parsed, startPos, 1, -1)),
  ];
  const first = reads.map(count).reduce((a, b) => a + b, 0);

  const getValue = (x: number, y: number) => valueInMap(parsed)({ x, y });
  const second = parsed
    .map((line, y) =>
      line
        .map<number>((c, x) =>
          c === "A" &&
          [getValue(x + 1, y + 1), getValue(x - 1, y - 1)].sort().join("") ===
            "MS" &&
          [getValue(x + 1, y - 1), getValue(x - 1, y + 1)].sort().join("") ===
            "MS"
            ? 1
            : 0
        )
        .reduce((a, b) => a + b, 0)
    )
    .reduce((a, b) => a + b, 0);
  console.log(first, second);
}

function followDirection(
  parsed: string[][],
  start: IPosition,
  dx: number,
  dy: number
) {
  const { x, y } = start;
  let result = parsed[y][x];
  let xx = x + dx;
  let yy = y + dy;
  while (parsed[yy]?.[xx] !== undefined) {
    result += parsed[yy][xx];
    xx += dx;
    yy += dy;
  }
  return result;
}

function count(read: string) {
  return (read.match(/XMAS/g) || []).length;
}
