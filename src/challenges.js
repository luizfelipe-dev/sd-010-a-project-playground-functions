// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  if ((conditionOne === true) && (conditionTwo === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let string = [''];
  let counter = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      counter += 1;
      string[counter] = [''];
    } else {
      string[counter] += phrase[index];
    }
    console.log(phrase[index]);
  }
  console.log(string);
  return string;
}

// Desafio 4
function concatName(string) {
  let phrase = string[(string.length - 1)];
  phrase += ', ';
  phrase += string[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let counter = 1;
  let langer = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > numbers[(index - 1)]) {
      counter = 1;
      langer = numbers[index];
    }
    if (langer === numbers[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
