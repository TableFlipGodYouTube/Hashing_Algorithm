const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  ".",
  ",",
  "/",
  "?",
  "]",
  "[",
  "{",
  "}",
  "\\",
  "|",
  "=",
  "+",
  "-",
  "_",
  "0",
  "9",
  "8",
  "7",
  "6",
  "5",
  "4",
  "3",
  "2",
  "1",
  ")",
  "(",
  "*",
  "&",
  "^",
  "%",
  "$",
  "#",
  "@",
  "!",
  "`",
  "~",
  "%20",
  '"',
  "'",
  ";",
  ":",
  "<",
  ">",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

let parsedLetters = [];

for (let i = 0; i < letters.length; i++) {
  parsedLetters.push(letters[i]);
  parsedLetters.push(null);
}

function encodet(f) {
  let final = "";
  for (var ii = 0; ii < f.length; ii++) {
    let temp = "";
    if (f[ii] === " ") {
      if (parsedLetters.indexOf("%20") * 4 > parsedLetters.length) {
        temp = parsedLetters.indexOf("%20") * 4 - parsedLetters.length;
        while (temp > parsedLetters / 2) {
          temp = temp - parsedLetters.length;
        }
      } else {
        temp = parsedLetters.indexOf("%20") * 4;
      }
    } else {
      if (parsedLetters.indexOf(f[ii]) * 4 > parsedLetters.length) {
        temp = parsedLetters.indexOf(f[ii]) * 4 - parsedLetters.length;
        while (temp > parsedLetters / 4) {
          temp = temp - parsedLetters.length;
        }
      } else {
        temp = parsedLetters.indexOf(f[ii]) * 4;
      }
    }
    final = final + parsedLetters[temp];
  }
  return final;
}

function decodet(f) {
  let final = "";
  for (var ii = 0; ii < f.length; ii++) {
    let temp = "";
    if (parsedLetters.indexOf(f[ii]) / 4 > parsedLetters.length) {
      temp = parsedLetters.indexOf(f[ii]) / 4 + parsedLetters.length;
      while (temp > parsedLetters / 4) {
        temp = temp + parsedLetters.length;
      }
    } else {
      temp = parsedLetters.indexOf(f[ii]) / 4;
    }
    final = final + parsedLetters[temp];
  }
  return final;
}
let codec = encodet("cool");
console.log(codec);
console.log(" ");
console.log(decodet(codec));
