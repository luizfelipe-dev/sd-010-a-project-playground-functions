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
function splitSentence(stringValue) {
  return stringValue.split(' ');
}

// Desafio 4
function concatName(arrayNames) {
  let newString = '';

  for (let index = arrayNames.length; index >= 0; index -= 1) {
    if (index === arrayNames.length - 1) {
      newString = newString.concat(arrayNames[index], ', ');
    }

    if (index === 0) {
      newString = newString.concat(arrayNames[index]);
    }
  }

  return newString;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;

  points += (wins * 3) + ties;

  return points;
}

// Função auxiliar
function highestValue(arrayNumbers) {
  let larger;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (index === 0) {
      larger = arrayNumbers[index];
    }

    if (arrayNumbers[index] > larger) {
      larger = arrayNumbers[index];
    }
  }

  return larger;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let highest = highestValue(arrayNumbers);

  let count = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === highest) {
      count += 1;
    }
  }

  return count;
}

// Função auxiliar
function getDistance(point1, point2) {
  let distancepoint = 0;
  if (point1 > point2) {
    distancepoint = point1 - point2;
  } else if (point1 < point2) {
    distancepoint = point2 - point1;
  }
  return distancepoint;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = getDistance(mouse, cat1);
  let distanceCat2 = getDistance(mouse, cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if ((arrayNumbers[index] % 3 === 0) && (arrayNumbers[index] % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

console.log(compareTrue(true, true));

console.log(calcArea(10, 50));

console.log(splitSentence('go Trybe'));

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

console.log(footballPoints(1, 2));

console.log(highestCount([0, 0, 0]));

console.log(catAndMouse(7, 9, 5));

console.log(fizzBuzz([7, 9]));

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
