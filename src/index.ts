import fs from "fs";
import readline from "readline";

const fileStream = fs.createReadStream("./src/input.txt", {
  encoding: "utf-8",
});

const fileLines = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});
