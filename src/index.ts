import fs from "fs";
import readline from "readline";

const fileStream = fs.createReadStream("./src/input.txt", {
  encoding: "utf-8",
});

const fileLines = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

// A and X == rock 1
// B and Y == paper 2
// C and Z == scisors 3

let myPoints = 0;

// first strategy
// const countMyPoints = (opponentMove: string, myMove: string) => {
//   if (opponentMove === "A") {
//     if (myMove === "X") myPoints += 3 + 1;
//     if (myMove === "Y") myPoints += 6 + 2;
//     if (myMove === "Z") myPoints += 0 + 3;
//   } else if (opponentMove === "B") {
//     if (myMove === "X") myPoints += 0 + 1;
//     if (myMove === "Y") myPoints += 3 + 2;
//     if (myMove === "Z") myPoints += 6 + 3;
//   } else if (opponentMove === "C") {
//     if (myMove === "X") myPoints += 6 + 1;
//     if (myMove === "Y") myPoints += 0 + 2;
//     if (myMove === "Z") myPoints += 3 + 3;
//   }
// };

// X - lose
// Y - draw
// Z - win

// second strategy
const countMyPoints = (opponentMove: string, ending: string) => {
  if (ending === "X") {
    if (opponentMove === "A") myPoints += 0 + 3;
    if (opponentMove === "B") myPoints += 0 + 1;
    if (opponentMove === "C") myPoints += 0 + 2;
  } else if (ending === "Y") {
    if (opponentMove === "A") myPoints += 3 + 1;
    if (opponentMove === "B") myPoints += 3 + 2;
    if (opponentMove === "C") myPoints += 3 + 3;
  } else if (ending === "Z") {
    if (opponentMove === "A") myPoints += 6 + 2;
    if (opponentMove === "B") myPoints += 6 + 3;
    if (opponentMove === "C") myPoints += 6 + 1;
  }
};

for await (const line of fileLines) {
  countMyPoints(line[0], line[2]);
}

console.log(myPoints);
