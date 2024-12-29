// import { testInput as input } from "./24-input";
import { input } from "./24-input";

export function doIt(progress: (...params: any[]) => void) {
  const [inputsS, gatesS] = input.split(`\n\n`).map((line) => line.split(`\n`));
  const values = new Map<string, boolean>();
  inputsS.forEach((line) => {
    const [name, value] = line.split(`: `);
    values.set(name, value === `1`);
  });
  const gates = gatesS.map((line) => {
    const [inputs, name] = line.split(` -> `);
    const [a, operation, b] = inputs.split(` `);
    return { operation, inputs: [a, b], name };
  });
  let fGates = [...gates];
  while (fGates.length) {
    const unsolved = [];
    for (const gate of fGates) {
      const inputs = gate.inputs.map((input) => values.get(input));
      if (inputs.includes(undefined)) {
        unsolved.push(gate);
        continue;
      }
      const [a, b] = inputs;
      switch (gate.operation) {
        case `AND`:
          values.set(gate.name, a! && b!);
          break;
        case `OR`:
          values.set(gate.name, a! || b!);
          break;
        case `XOR`:
          values.set(gate.name, a !== b);
          break;
      }
    }
    fGates = unsolved;
  }
  const first = getNumber(values, `z`);

  const second = do2(gates);
  console.log(first, second);
}

function do2(gates: { operation: string; inputs: string[]; name: string }[]) {
  const zs = gates
    .map((g) => g.name)
    .filter((name) => name.startsWith(`z`))
    .sort();
  const gatesMap = new Map(gates.map((g) => [g.name, g]));
  let validatedGates = new Set<string>();
  let switchedGates = new Set<string>();
  for (let i = 0; i < zs.length; i++) {
    const usedGates = new Set<string>();
    const one = Math.pow(2, i);
    let evals: [() => boolean, boolean][] = [
      [() => tryEval(zs[i], 0, 0, usedGates), false],
      [() => tryEval(zs[i], one, 0, usedGates), true],
      [() => tryEval(zs[i], 0, one, usedGates), true],
      [() => tryEval(zs[i], one, one, usedGates), false],
    ];
    if (i > 0) {
      const lesserOne = Math.pow(2, i - 1);
      evals.push(
        [() => tryEval(zs[i], lesserOne, lesserOne, usedGates), true],
        [() => tryEval(zs[i], one + lesserOne, lesserOne, usedGates), false],
        [() => tryEval(zs[i], lesserOne, one + lesserOne, usedGates), false],
        [
          () => tryEval(zs[i], one + lesserOne, one + lesserOne, usedGates),
          true,
        ]
      );
    }
    if (i === zs.length - 1) {
      const lesserOne = Math.pow(2, i - 1);
      evals = [
        [() => tryEval(zs[i], 0, 0, usedGates), false],
        [() => tryEval(zs[i], lesserOne, 0, usedGates), false],
        [() => tryEval(zs[i], 0, lesserOne, usedGates), false],
        [() => tryEval(zs[i], lesserOne, lesserOne, usedGates), true],
      ];
    }
    if (evals.every(([fn, expected]) => fn() === expected)) {
      console.log("validated", zs[i], validatedGates.size, usedGates.size);
      validatedGates = new Set([...validatedGates, ...usedGates]);

      continue;
    }
    const candidates = [...usedGates].filter((g) => !validatedGates.has(g));
    console.log("error found:", i, zs[i], candidates, getEq(gatesMap, zs[i]));
    let best:
      | { candidate: string; other: string; usedGates: Set<string> }
      | undefined = undefined;
    for (const candidate of candidates) {
      const candidateGate = gatesMap.get(candidate)!;
      const others = [...gatesMap.keys()].filter(
        (g) => g !== candidate && !validatedGates.has(g)
      );
      for (const other of others) {
        const otherGate = gatesMap.get(other)!;
        gatesMap.set(candidate, otherGate);
        gatesMap.set(other, candidateGate);
        usedGates.clear();
        if (evals.every(([fn, expected]) => fn() === expected)) {
          if (!best || usedGates.size < best.usedGates.size)
            best = { candidate, other, usedGates: new Set(usedGates) };
        }
        gatesMap.set(other, otherGate);
        gatesMap.set(candidate, candidateGate);
      }
    }
    if (best) {
      const candidateGate = gatesMap.get(best.candidate)!;
      gatesMap.set(best.candidate, gatesMap.get(best.other)!);
      gatesMap.set(best.other, candidateGate);
      switchedGates.add(best.candidate);
      switchedGates.add(best.other);
      validatedGates = new Set([...validatedGates, ...best.usedGates]);
      console.log("switched", best.candidate, best.other);
      console.log(getEq(gatesMap, zs[i]));
    }
  }
  return [...switchedGates].sort().join(",");

  function tryEval(
    gateName: string,
    x: number,
    y: number,
    usedGates: Set<string>,
    currentPath: string[] = []
  ): boolean {
    if (currentPath.includes(gateName)) return false;
    if (gateName.startsWith(`x`))
      return Math.floor(x / Math.pow(2, +gateName.slice(1))) % 2 !== 0;
    if (gateName.startsWith(`y`))
      return Math.floor(y / Math.pow(2, +gateName.slice(1))) % 2 !== 0;
    const gate = gatesMap.get(gateName)!;
    usedGates.add(gateName);
    const [a, b] = gate.inputs.map((input) =>
      tryEval(input, x, y, usedGates, [...currentPath, gateName])
    );
    switch (gate.operation) {
      case `AND`:
        return a && b;
      case `OR`:
        return a || b;
      case `XOR`:
        return a !== b;
    }
    throw new Error(`Unknown operation: ${gate.operation}`);
  }
}

function getEq(
  gatesMap: Map<string, { operation: string; inputs: string[]; name: string }>,
  name: string
): string {
  const gate = gatesMap.get(name);

  if (!gate) return name;
  let [a, b] = gate.inputs.map((input) => getEq(gatesMap, input)).sort();
  return `(${a} ${gate.operation} ${b})`;
}

function getNumber(values: Map<string, boolean>, letter: string) {
  return [...values.keys()]
    .filter((key) => key.startsWith(letter))
    .sort()
    .map((key, i) => (values.get(key) ? 1 : 0) * Math.pow(2, i))
    .reduce((a, b) => a + b, 0);
}
