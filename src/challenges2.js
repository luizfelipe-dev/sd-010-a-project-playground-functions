// Desafio 10
function techList(arrayList, name) {
  let newArrayList = [];

  if (arrayList.length > 0) {
    for (let index = 0; index < arrayList.length; index += 1) {
      newArrayList.push({ tech: arrayList[index], name });
    }
  } else {
    return 'Vazio!';
  }

  newArrayList.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }

    if (a.tech < b.tech) {
      return -1;
    }

    return 0;
  });

  return newArrayList;
}

// Função auxiliar
function highestValue(arrayNumbers) {
  let larger;
  let largerValueIndex;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (index === 0 || arrayNumbers[index] > larger) {
      larger = arrayNumbers[index];
      largerValueIndex = index;
    }
  }

  return largerValueIndex;
}

function moreIsRepeated(arrayNumbers) {
  let numbers = [];

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    numbers.push(1);
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    for (let compareIndex = 0; compareIndex < arrayNumbers.length; compareIndex += 1) {
      if ((index !== compareIndex) && (arrayNumbers[index] === arrayNumbers[compareIndex])) {
        numbers[index] += 1;
      }
    }
  }

  let index = highestValue(numbers);

  return arrayNumbers[index];
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let formatedPhoneNumber = '';
  let countRepeated = 0;
  const err = 'não é possível gerar um número de telefone com esses valores';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] < 0) {
      return err;
    }
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] === moreIsRepeated(arrayNumbers)) {
      countRepeated += 1;
    }
  }

  if (countRepeated >= 3) {
    return err;
  }

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > 9) {
      return err;
    }
  }

  formatedPhoneNumber = formatedPhoneNumber.concat('(');
  for (let index = 0; index < 2; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat(') ');

  for (let index = 2; index < 7; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  formatedPhoneNumber = formatedPhoneNumber.concat('-');

  for (let index = 7; index < 11; index += 1) {
    formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
  }

  return formatedPhoneNumber;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(stringPhrase) {
  let newStringPhrase = stringPhrase.replace(/\D/g, '').split('');
  let sum = 0;
  let result;

  for (let index = 0; index < newStringPhrase.length; index += 1) {
    sum += parseInt(newStringPhrase[index], 10);
  }

  if (sum === 0 || sum === 1) {
    result = sum.toString().concat(' copo de água');
    return result;
  }

  result = sum.toString().concat(' copos de água');
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Wanderson'));

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
