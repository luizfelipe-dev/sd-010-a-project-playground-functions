// Desafio 1
function compareTrue(param1, param2) {
  if (param1 && param2 === true) {
    return true;
  }
  return false;
  // código do inicio do esclarecimento técnico
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
  // sites usados como referência https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254 ,  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
}

// Desafio 4
function concatName(arr) {
// sites usados como referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals, https://www.devmedia.com.br/javascript-concat-concatenando-arrays-e-strings/37964, https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254, https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let games = wins * 3;
  return games + ties;
}

// Desafio 6
function highestCount(elementArr) {
  let bigNumber = Math.max(parseInt(elementArr));
  function number(value) {
    return value === bigNumber;
  }
  let retunrNumber = elementArr.filter(number);
  return retunrNumber.length;
  // sites usados para referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array, https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter,
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse < cat2 - mouse) {
    return 'cat1';
  } else if (cat2 - mouse < cat1 - mouse) {
    return 'cat2';
  } else if (cat1 === cat2) {
    return 'os gatos trombam e o rato foge';
  }
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
