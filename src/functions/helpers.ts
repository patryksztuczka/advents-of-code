import fs from "fs";
import readline from "readline";

import { IPriorities } from "../index";

export const readFileLines = (filePath: string) => {
  const fileStream = fs.createReadStream(filePath, {
    encoding: "utf-8",
  });

  const fileLines = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  return fileLines;
};

export const genCharArray = (
  charA: string,
  charZ: string,
  startingPriorty: number
) => {
  let i = charA.charCodeAt(0);
  const j = charZ.charCodeAt(0);
  const offset = i - startingPriorty;
  let priorties: IPriorities = {};

  for (; i <= j; ++i) {
    const key = String.fromCharCode(i);
    priorties[key] = i - offset;
  }
  return priorties;
};
