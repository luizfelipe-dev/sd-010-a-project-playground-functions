// Desafio 10
function techList(array, name) {
  // esse codigo foi baseado por essa discussão no stack overflow https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript
  let list = [];
  for (let index in array)
  {
    list.push({ tech: array[index], name: name })
  }
  return list
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
