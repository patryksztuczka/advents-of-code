import fs from "fs/promises";
const file = await fs.readFile("./src/input.txt", "utf-8");
console.log(file);
