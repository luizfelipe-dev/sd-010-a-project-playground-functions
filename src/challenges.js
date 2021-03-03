// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length - 1] + ', ' + array[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let higherNumber = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (arrayNumbers[index2] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = cat1 - mouse;
  let positionCat2 = cat2 - mouse;
  if (positionCat1 > positionCat2) {
    return console.log('cat2');
  } else if (positionCat2 > positionCat1) {
    return console.log('cat1');
  }
  return console.log('os gatos trombam e o rato foge');
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9 - raciocinando neste. Verificar se o 7 consertou - ainda nao dei push.
function encode(string) {
  for (let index = 0; index <= string.length; index += 1) {
    let aChange = string.replace(/a/, '1');
    let eChange = string.replace(/e/, '2');
    let iChange = string.replace(/i/, '3');
    let oChange = string.replace(/o/, '4');
    let uChange = string.replace(/u/, '5');
  }
  return string
}
function decode(string) {
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
