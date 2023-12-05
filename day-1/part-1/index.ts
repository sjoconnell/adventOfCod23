import * as fs from "fs";

let total = 0;

function getFile() {
  const file = fs.readFileSync("../input.txt", "utf-8");

  return file.split("\n");
}

function getNumbers(string: string) {
  let num1;
  let num2;
  const split = string.split("");
  split.some(char => {
    if (!Number.isNaN(Number(char))) {
      num1 = char;
      return true;
    }
  });
  split.reverse().some(char => {
    if (!Number.isNaN(Number(char))) {
      num2 = char;
      return true;
    }
  });

  total += Number(`${num1}${num2}`);
}

const arrayOfstrings = getFile();
arrayOfstrings.forEach(string => getNumbers(string));

console.log(total);
