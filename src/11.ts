// import { testInput as input } from "./11-input";
import { input } from "./11-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(` `).map((n) => n);
  const first = count(parsed, 25);
  const second = count(parsed, 75);
  console.log(first, second);
}

function count(parsed: string[], blinks: number) {
  let values = new Map<string, number>(parsed.map((n) => [n, 1]));
  for (let i = 0; i < blinks; i++) {
    const next = new Map<string, number>();
    function update(n: string, count: number) {
      next.set(n, (next.get(n) ?? 0) + count);
    }
    values.forEach((count, n) => {
      if (n === "0") {
        update("1", count);
      } else if (n.length % 2 === 0) {
        update(n.slice(0, n.length / 2), count);
        update(`${+n.slice(n.length / 2)}`, count);
      } else {
        update(`${+n * 2024}`, count);
      }
    });
    values = next;
  }
  return [...values.values()].reduce((a, b) => a + b, 0);
}
