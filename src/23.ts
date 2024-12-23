// import { testInput as input } from "./23-input";
import { input } from "./23-input";

export function doIt(progress: (...params: any[]) => void) {
  const parsed = input.split(`\n`).map((line) => {
    const [a, b] = line.split("-");
    return { a, b };
  });
  const connections = new Map<string, string[]>();
  parsed.forEach(({ a, b }) => {
    if (!connections.has(a)) {
      connections.set(a, []);
    }
    if (!connections.has(b)) {
      connections.set(b, []);
    }
    connections.get(a)!.push(b);
    connections.get(b)!.push(a);
  });
  const tripples = new Set<string>();
  const fullTripples = new Set<string>();
  for (const [k, v] of connections) {
    for (let i = 0; i < v.length; i++) {
      for (let j = i + 1; j < v.length; j++) {
        const tripple = [k, v[i], v[j]];
        if (tripple.every((t) => !t.startsWith("t"))) continue;
        const key = tripple.sort().join(",");
        if (tripples.has(key)) fullTripples.add(key);
        tripples.add(key);
      }
    }
  }
  const first = fullTripples.size;

  const second = findBest(Array.from(connections.keys()), [], 0)
    .sort()
    .join(",");
  console.log(first, second);

  function findBest(
    candidates: string[],
    currentGroup: string[],
    bestLength: number
  ): string[] {
    if (candidates.length + currentGroup.length <= bestLength) return [];
    let best = currentGroup;
    for (const candidate of candidates) {
      progress(candidates, best, bestLength);
      const group = findBest(
        candidates.filter((c) => connections.get(candidate)!.includes(c)),
        [...currentGroup, candidate],
        bestLength
      );
      if (group.length > bestLength) {
        best = [...group];
        bestLength = group.length;
      }
    }
    return best;
  }
}
