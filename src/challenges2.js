// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (la() || lb() || lc()){
    return true;
  } 
    return false;
}

function la() {
  if ((lineA < lineB + lineC) && (lineA > Math.abs (lineB - lineC)));{
    return true;
  }
}

function lb() {
  if (lineB < lineA + lineC && lineB > Math.abs (lineA - lineC)){
    return true;
  }
}

function lc() {
  if (lineC < lineB + lineA && lineC > Math.abs (lineB - lineA)){
    return true;
  }
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
