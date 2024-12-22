// import { testInput as input } from "./22-input";
import { input } from "./22-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => +line);

  const counts = parsed.map(count);
  const first = counts.map((c) => c.secret).reduce((a, b) => a + b, 0);
  const combos = new Map<string, number>();
  counts.forEach(({ prices }) => {
    const diffs: number[] = [];
    const visited = new Set<string>();
    for (let i = 1; i < prices.length; i++) {
      diffs.push(prices[i] - prices[i - 1]);
      if (diffs.length > 4) {
        diffs.shift();
      }
      if (diffs.length === 4) {
        const key = diffs.join(",");
        if (visited.has(key)) {
          continue;
        }
        combos.set(key, (combos.get(key) || 0) + prices[i]);
        visited.add(key);
      }
    }
  });
  const second = Math.max(...combos.values());
  console.log(first, second);
}

function count(v: number) {
  let secret = v;
  const prices = [v % 10];
  for (let i = 0; i < 2000; i++) {
    secret = mixprune(secret * 64);
    secret = mixprune(Math.floor(secret / 32));
    secret = mixprune(secret * 2048);
    prices.push(secret % 10);
  }
  return { secret, prices };

  function mixprune(v: number) {
    return (secret ^ v % 16777216) % 16777216;
  }
}
