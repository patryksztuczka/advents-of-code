import fs from "fs";
import readline from "readline";

const fileStream = fs.createReadStream("./src/input.txt", {
  encoding: "utf-8",
});

const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

let currentCalories = 0;
let maxCalories = 0;
let topThreeTotalCalories = 0;
const allElvesCalories: number[] = [];

for await (const line of rl) {
  if (line.length === 0) {
    if (currentCalories > maxCalories) maxCalories = currentCalories;
    allElvesCalories.push(currentCalories);
    currentCalories = 0;
  } else {
    currentCalories += parseInt(line);
  }
}

allElvesCalories
  .sort((a, b) => (a >= b ? -1 : 1))
  .slice(0, 3)
  .forEach((elveCalories) => {
    topThreeTotalCalories += elveCalories;
  });

console.log(`Top 1: ${maxCalories}`);
console.log(`Top 3 total: ${topThreeTotalCalories}`);
