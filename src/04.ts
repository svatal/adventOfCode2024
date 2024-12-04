// import { testInput as input } from "./04-input";
import { input } from "./04-input";
import { IPosition, valueInMap } from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => line.split(""));
  const first = parsed
    .map(
      (line, y) =>
        line
          .map((c, x) => ({ x, y }))
          .map((pos) => [
            read(parsed, pos, 1, 0, 4),
            read(parsed, pos, 0, 1, 4),
            read(parsed, pos, -1, 0, 4),
            read(parsed, pos, 0, -1, 4),
            read(parsed, pos, 1, 1, 4),
            read(parsed, pos, -1, 1, 4),
            read(parsed, pos, 1, -1, 4),
            read(parsed, pos, -1, -1, 4),
          ])
          .flat()
          .filter((s) => s === "XMAS").length
    )
    .reduce((a, b) => a + b, 0);

  const second = parsed
    .map(
      (line, y) =>
        line
          .map((c, x) => [
            read(parsed, { x: x - 1, y: y - 1 }, 1, 1, 3),
            read(parsed, { x: x - 1, y: y + 1 }, 1, -1, 3),
          ])
          .filter(
            ([a, b]) =>
              (a === "MAS" || a === "SAM") && (b === "MAS" || b === "SAM")
          ).length
    )
    .reduce((a, b) => a + b, 0);
  console.log(first, second);
}

function read(
  parsed: string[][],
  pos: IPosition,
  dx: number,
  dy: number,
  count: number
): string {
  if (count <= 0) return "";
  return (
    valueInMap(parsed)(pos) +
    read(parsed, { x: pos.x + dx, y: pos.y + dy }, dx, dy, count - 1)
  );
}
