// Desafio 1
function compareTrue(value1, value2) {
  if(value1 === true && value2 === true) {
    return true ;
  } else {
    return false ;
  }
}
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));


// Desafio 2
function calcArea(base, heigth) {
  // seu código aqui
  return  (base * heigth) / 2; 
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(shareString) {
  return shareString.split('');
}
console.log(splitSentence('go, Trybe'))
console.log(splitSentence('vamo que vamo'))
console.log(splitSentence('foguete'))

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length-1]} , ${arrayString[0]}` ;
}
arrayString = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
console.log(concatName(arrayString));
arrayString = ['foguete', 'não', 'tem', 'ré']
console.log(concatName(arrayString));
arrayString = ['captain', 'my', 'captain']
console.log(concatName(arrayString));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));


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
