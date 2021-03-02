// Desafio 1
function compareTrue(valueOne, ValueTwo) {
  if (valueOne === true && ValueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  /**
   * Me basei um pouco no código do Rich Rhinoceros, link do repositório: https://www.codegrepper.com/code-examples/javascript/javascript+split+string+by+space
   */
  const array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  /**
   * Para pegar o último elemento de um array segui de acordo com o código do LINQ,
   * segue o link do StackOverFlow: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
   */
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`;
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
