// import { testInput as input } from "./18-input";
import { input } from "./18-input";
import { neighbors4, valueInMap } from "./utils/position2D";
import { prefillArray } from "./utils/util";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => {
    const [x, y] = line.split(",").map((v) => +v);
    return { x, y };
  });

  const first = findAWay(1024);
  let second = 1025;
  while (findAWay(second) !== null) {
    second++;
  }
  const secondPos = parsed[second - 1];
  console.log(first, `${secondPos.x},${secondPos.y}`);

  function findAWay(bytes: number) {
    const memory = prefillArray(71, () =>
      prefillArray<number | null>(71, () => null)
    );
    const sliced = parsed.slice(0, bytes);
    sliced.forEach(({ x, y }) => {
      memory[y][x] = NaN;
    });
    const toDo = [{ x: 0, y: 0 }];
    memory[0][0] = 0;
    while (toDo.length) {
      const pos = toDo.shift()!;
      const steps = valueInMap(memory)(pos)!;
      neighbors4(pos).forEach((n) => {
        if (valueInMap(memory)(n) === null) {
          memory[n.y][n.x] = steps + 1;
          toDo.push(n);
        }
      });
    }
    if (memory[70][70] === null) {
      console.log(
        memory
          .map((line) =>
            line
              .map((n) => (n === null ? "." : isNaN(n) ? "#" : n % 10))
              .join("")
          )
          .join("\n")
      );
    }
    return memory[70][70];
  }
}
