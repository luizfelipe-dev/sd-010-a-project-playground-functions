// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToArray) {
  return stringToArray.split(' ');
}

// Desafio 4
function concatName(arrayOfStrings) {
  return `${arrayOfStrings[arrayOfStrings.length - 1]}, ${arrayOfStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  let points = wins + ties;
  return points;
}

// Desafio 6
// Este código criei baseado na minha amiga de Tribo Cla Oliveira que me ajudou demais nesse projeto.
// Recriou a função comigo pausadamente me explicando cada detalhe e me fazendo entender o por quê de cada coisa.
// Obrigado Cla Oliveira!!!
function higherNumber(arrayOfNumber) {
  let highest = arrayOfNumber[0];
  for (let index = 0; index < arrayOfNumber.length; index += 1) {
    if (arrayOfNumber[index] > highest) {
      highest = arrayOfNumber[index];
    }
  }
  return highest;
}

function highestCount(arrayOfNumber) {
  let highNumber = higherNumber(arrayOfNumber);
  let higherRepeated = 0;
  for (let indexRepeated = 0; indexRepeated < arrayOfNumber.length; indexRepeated += 1) {
    if (arrayOfNumber[indexRepeated] === highNumber) {
      higherRepeated += 1;
    }
  }

  return higherRepeated;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catchMouse = 0;
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  let distanceCat1Abs = Math.abs(distanceCat1);
  let distanceCat2Abs = Math.abs(distanceCat2);

  if (distanceCat1Abs < distanceCat2Abs) {
    catchMouse = 'cat1';
  } else if (distanceCat2Abs < distanceCat1Abs) {
    catchMouse = 'cat2';
  } else {
    catchMouse = 'os gatos trombam e o rato foge';
  }
  return catchMouse;
}

// Desafio 8
// Este código fiz com auxílio da minha amiga Elisa França.
// Eu consegui desenvolver a lógica mas o Lint tava acusando complexidade nível 6 e o máximo era 5. Então ela me auxiliou a dividir o código em duas funções.
function conditional(arrayN) {
  let fizzBuzze;
  if (arrayN % 3 === 0 && arrayN % 5 === 0) {
    fizzBuzze = 'fizzBuzz';
  } else if (arrayN % 3 === 0) {
    fizzBuzze = 'fizz';
  } else if (arrayN % 5 === 0) {
    fizzBuzze = 'buzz';
  } else {
    fizzBuzze = 'bug!';
  }
  return fizzBuzze;
}
function fizzBuzz(arrayFizz) {
  let fizzBuzze2 = [];
  for (let index = 0; index < arrayFizz.length; index += 1) {
    fizzBuzze2.push(conditional(arrayFizz[index]));
  }
  return fizzBuzze2;
}

// Desafio 9
//Com auxílio do Lucas Pedroso pude entender como o regex é poderoso para fazer buscas automatizadas;
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
}

function encode(string) {
  let phrase = string;
  
  for (let key in code) {
    // console.log(key);
    let regex = `${key}`;
    phrase = phrase.replace(RegExp(regex, 'g'), code[key]);
  }
  return phrase;
} 
console.log(encode('Ola tudo bem?'));

let code = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
}
function decode(string) {
  let phrase = string;
  
  for (let key in code) {
    // console.log(key);
    let regex = `${key}`;
    phrase = phrase.replace(RegExp(code[key], 'g'), regex);
  }
  return phrase;
}
console.log(decode('Ol1 t5d4 b2m?'));

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
