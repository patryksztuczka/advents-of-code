import { genCharArray, readFileLines } from "./functions/helpers";

export interface IPriorities {
  [key: string]: number;
}

const fileLines = readFileLines("./src/input.txt");

const lowerCases = genCharArray("a", "z", 1);
const upperCases = genCharArray("A", "Z", 27);

const merged = {
  ...lowerCases,
  ...upperCases,
};

let sum = 0;

for await (const line of fileLines) {
  let firstCompartment = line.slice(0, line.length / 2);
  let secondCompartment = line.slice(line.length / 2, line.length);
  const occurences: string[] = [];

  for (let i = 0; i < firstCompartment.length; i++) {
    if (
      !occurences.includes(firstCompartment[i]) &&
      secondCompartment.includes(firstCompartment[i])
    ) {
      occurences.push(firstCompartment[i]);
      sum += merged[firstCompartment[i]];
    }
  }
}

console.log("Sum: ", sum);
