// import { testInput as input } from "./13-input";
import { input } from "./13-input";
import { IPosition } from "./utils/position2D";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n\n`).map((block) => {
    const [lA, lB, lP] = block.split(`\n`);
    const mA = lA.match(/X\+(\d+), Y\+(\d+)/)!;
    const mB = lB.match(/X\+(\d+), Y\+(\d+)/)!;
    const mP = lP.match(/X=(\d+), Y=(\d+)/)!;
    return {
      aOffset: { x: +mA[1], y: +mA[2] },
      bOffset: { x: +mB[1], y: +mB[2] },
      prizePos: { x: +mP[1], y: +mP[2] },
    };
  });
  const first = parsed
    .map(cheapestWay)
    .reduce<number>((a, b) => a + (b ?? 0), 0);
  const second = parsed
    .map((maze) => ({
      ...maze,
      prizePos: {
        x: maze.prizePos.x + 10000000000000,
        y: maze.prizePos.y + 10000000000000,
      },
    }))
    .map(cheapestWay)
    .reduce<number>((a, b) => a + (b ?? 0), 0);
  console.log(first, second);
}

function cheapestWay(p: {
  aOffset: IPosition;
  bOffset: IPosition;
  prizePos: IPosition;
}): number | null {
  const { aOffset, bOffset, prizePos } = p;
  let prevDiff = Number.MAX_SAFE_INTEGER;
  let i = 0;
  while (true) {
    const rest = {
      x: prizePos.x - aOffset.x * i,
      y: prizePos.y - aOffset.y * i,
    };
    const stepsX = rest.x / bOffset.x;
    const stepsY = rest.y / bOffset.y;
    const diff = Math.abs(stepsX - stepsY);
    if (diff === 0 && Number.isInteger(stepsX)) {
      return i * 3 + stepsX;
    }
    if (diff > prevDiff) {
      break;
    }
    prevDiff = diff;
    const minSteps = Math.min(stepsX, stepsY);
    const rest2 = {
      x: rest.x - bOffset.x * minSteps,
      y: rest.y - bOffset.y * minSteps,
    };
    i += Math.floor(
      Math.max(1, rest2.x > rest2.y ? rest2.x / aOffset.x : rest2.y / aOffset.y)
    );
  }
  return null;
}
