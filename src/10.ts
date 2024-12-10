// import { testInput as input } from "./10-input";
import { input } from "./10-input";
import {
  IPosition,
  neighbors4,
  posFromString,
  posToString,
  valueInMap,
} from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input
    .split(`\n`)
    .map((line) => line.split("").map((cell) => +cell));
  let first = 0;
  parsed.forEach((line, y) =>
    line.forEach((cell, x) => {
      if (cell !== 0) return;
      let poss = [{ x, y }];
      let current = 0;
      while (poss.length > 0 && current < 9) {
        current++;
        poss = [
          ...new Set(
            poss.flatMap((pos) =>
              neighbors4(pos)
                .filter((pos) => valueInMap(parsed)(pos) === current)
                .map(posToString)
            )
          ),
        ].map(posFromString);
      }
      first += poss.length;
    })
  );
  let second = 0;
  parsed.forEach((line, y) =>
    line.forEach((cell, x) => {
      if (cell !== 0) return;
      let poss = [{ pos: { x, y }, count: 1 }];
      let current = 0;
      while (poss.length > 0 && current < 9) {
        current++;
        poss = [
          ...poss
            .flatMap((path) =>
              neighbors4(path.pos)
                .filter((pos) => valueInMap(parsed)(pos) === current)
                .map((pos) => ({ pos, count: path.count }))
            )
            .reduce((acc, path) => {
              const key = posToString(path.pos);
              if (acc.has(key)) {
                acc.get(key)!.count += path.count;
              } else {
                acc.set(key, path);
              }
              return acc;
            }, new Map<string, { pos: IPosition; count: number }>())
            .values(),
        ];
      }
      second += poss.reduce((acc, path) => acc + path.count, 0);
    })
  );
  console.log(first, second);
}
