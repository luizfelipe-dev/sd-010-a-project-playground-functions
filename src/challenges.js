// Desafio 1
function compareTrue(valueBooleanOne, valueBooleanTwo) {
  if (valueBooleanOne === true && valueBooleanTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
let areaDoTriangulo = 0;
function calcArea(base, height) {
  areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
}
console.log(areaDoTriangulo);

// Desafio 3

function splitSentence(string) {
  stringDividida = string.split(" ,");
  return stringDividida ; 
}
console.log(stringDividida);

// Desafio 4
function concatName(array) {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
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
