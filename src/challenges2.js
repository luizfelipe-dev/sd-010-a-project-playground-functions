// Desafio 10
function techList(techArray, name) {
  techArray = techArray.sort();
  let objectArray = [];
  for (let index = 0; index < techArray.length; index += 1) {
    let object = { tech: techArray[index], name: name }
    objectArray.push(object);
  }
  return objectArray;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

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
