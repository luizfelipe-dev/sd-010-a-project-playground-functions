// Desafio 10
function techList(array, names) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let order = array.sort();
  let techs = order.map((item) => {
    let obj = { tech: item, name: names };
    return obj;
  }, {});
  return techs;
}

// Desafio 11
// A função ArrayFilterRepeat foi contribuição do @Lucas Pedroso.
function arrayFilterRepeat(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if ((array.filter((number) => number === element)).length >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let arrayFilters = array.filter((number) => number < 0 || number > 9);
  if (arrayFilters.length > 0 || arrayFilterRepeat(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let arrayToString = array.toString().replace(/,/g, '');
  return arrayToString.replace(/(\d{2})(\d{5})(\d{3})/g, '($1) $2-$3');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  return result;
}
console.log(triangleCheck(10, 14, 8));

// const array = [];
// array.push(lineA, lineB, lineC);
// array.filter( function (number, index, arrays) {
//   let number1 = arrays[0];
//   let number2 = arrays[1];
//   let number3 = arrays[2];
//   number1 < (number2 + number3) && number > Math.abs();
// });

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
