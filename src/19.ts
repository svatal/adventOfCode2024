// import { testInput as input } from "./19-input";
import { input } from "./19-input";

export function doIt(progress: (...params: any[]) => void) {
  const [towelsS, patternsS] = input.split(`\n\n`);
  const towels = towelsS.split(`, `);
  const patterns = patternsS.split(`\n`);

  const cache = new Map<string, number>();
  const matches = patterns.map(isPossible);
  const first = matches.filter((m) => m > 0).length;
  const second = matches.reduce((a, b) => a + b, 0);
  console.log(first, second);

  function isPossible(pattern: string): number {
    const cached = cache.get(pattern);
    if (cached !== undefined) {
      return cached;
    }
    let c = 0;
    for (let i = 0; i < towels.length; i++) {
      const towel = towels[i];
      if (pattern.startsWith(towel)) {
        if (pattern.length === towel.length) {
          c += 1;
        }
        c += isPossible(pattern.slice(towel.length));
      }
    }
    cache.set(pattern, c);
    return c;
  }
}
