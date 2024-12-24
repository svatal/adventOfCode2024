// import { testInput as input } from "./24-input";
import { get } from "http";
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

  for (let i = 0; i < gates.length; i++) {
    for (let j = i + 1; j < gates.length; j++) {
      const gates2 = [...gates.slice(i + 1, j), ...gates.slice(j + 1)];
      for (let k = 0; k < gates2.length; k++) {
        for (let l = k + 1; l < gates2.length; l++) {
          const gates3 = [...gates2.slice(k + 1, l), ...gates2.slice(l + 1)];
          for (let m = 0; m < gates3.length; m++) {
            for (let n = m + 1; n < gates3.length; n++) {
              const gates4 = [
                ...gates3.slice(m + 1, n),
                ...gates3.slice(n + 1),
              ];
              for (let o = 0; o < gates4.length; o++) {
                for (let p = o + 1; p < gates4.length; p++) {
                  const gates5 = [
                    ...gates4.slice(o + 1, p),
                    ...gates4.slice(p + 1),
                  ];
                  progress(i, j, k, l, m, n, o, p);
                  const gs = [
                    ...gates5,
                    ...getSwitched(gates, i, j),
                    ...getSwitched(gates2, k, l),
                    ...getSwitched(gates3, m, n),
                    ...getSwitched(gates4, o, p),
                  ];
                  if (
                    testPlus(values, gs) &&
                    testInputs.every(([x, y]) =>
                      testPlus(
                        new Map(
                          [...values.entries()].map(
                            ([k, v]) =>
                              [
                                k,
                                k.startsWith("x")
                                  ? x[+k.slice(1)] === "1"
                                  : y[+k.slice(1)] === "1",
                              ] as const
                          )
                        ),
                        gs
                      )
                    )
                  ) {
                    console.log(i, j, k, l, m, n, o, p);
                    console.log(
                      [
                        gates[i],
                        gates[j],
                        gates2[k],
                        gates2[l],
                        gates3[m],
                        gates3[n],
                        gates4[o],
                        gates4[p],
                      ]
                        .map((gate) => gate.name)
                        .sort()
                        .join(`,`)
                    );
                    return;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  const second = gates.length;
  console.log(first, second);
}

let testInputs = [
  [
    "10101010101010101010101010101010101010101010",
    "10101010101010101010101010101010101010101010",
  ],
  [
    "01010101010101010101010101010101010101010101",
    "10101010101010101010101010101010101010101010",
  ],
  [
    "01010101010101010101010101010101010101010101",
    "01010101010101010101010101010101010101010101",
  ],
  [
    "11111111111111111111111111111111111111111111",
    "10000000000000000000000000000000000000000000",
  ],
  [
    "11111111111111111111111111111111111111111111",
    "11111111111111111111111111111111111111111111",
  ],
];

function getSwitched(
  gates: { operation: string; inputs: string[]; name: string }[],
  i: number,
  j: number
) {
  return [
    { ...gates[i], name: gates[j].name },
    { ...gates[j], name: gates[i].name },
  ];
}

function testPlus(
  inputs: Map<string, boolean>,
  gates: { operation: string; inputs: string[]; name: string }[]
) {
  const values = new Map(inputs);
  const x = getNumber(values, `x`);
  const y = getNumber(values, `y`);
  const z = x + y;
  while (gates.length) {
    const unsolved = [];
    for (const gate of gates) {
      const inputs = gate.inputs.map((input) => values.get(input));
      if (inputs.includes(undefined)) {
        unsolved.push(gate);
        continue;
      }
      const [a, b] = inputs;
      let res = false;
      switch (gate.operation) {
        case `AND`:
          res = a! && b!;
          break;
        case `OR`:
          res = a! || b!;
          break;
        case `XOR`:
          res = a !== b;
          break;
      }
      if (gate.name.startsWith(`z`)) {
        if (res !== !!(z & Math.pow(2, +gate.name.slice(1)))) {
          // console.log(
          //   "nope",
          //   gate.name,
          //   res,
          //   !!(z & Math.pow(2, +gate.name.slice(1)))
          // );
          return false;
        }
      }
      values.set(gate.name, res);
    }
    if (gates.length === unsolved.length) return false;
    gates = unsolved;
  }
  return true;
}

function getNumber(values: Map<string, boolean>, letter: string) {
  return [...values.keys()]
    .filter((key) => key.startsWith(letter))
    .sort()
    .map((key, i) => (values.get(key) ? 1 : 0) * Math.pow(2, i))
    .reduce((a, b) => a + b, 0);
}
