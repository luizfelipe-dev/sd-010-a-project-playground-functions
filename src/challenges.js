// Desafio 1
function compareTrue(teamFlamengoChampion, teamInterNoChampion) {
  if (teamFlamengoChampion && teamInterNoChampion === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 - Aprendi a usar o SPLIT no site https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254
function splitSentence(frase, fraseSplit) {
  fraseSplit = frase.split(' ');
  return fraseSplit;
}

// Desafio 4
function concatName(listaDeNomes, ultimoPrimeiroNome) {
  ultimoPrimeiroNome = listaDeNomes[listaDeNomes.length - 1] + ', ' + listaDeNomes[0];
  return ultimoPrimeiroNome;
}

// Desafio 5
function footballPoints(wins, ties, score) {
  score = wins * 3 + ties * 1;
  return score;
}

// Desafio 6 - Entendi melhor sobre o Math.max neste link https://www.youtube.com/watch?v=IY7TRbXLU6c
function highestCount(conjuntoNumeros) {
  let quantidadeVezes = 0;
  let maiorNumero = Math.max(...conjuntoNumeros);
  for (let index = 0; index < conjuntoNumeros.length; index += 1) {
    if (maiorNumero === conjuntoNumeros[index]) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
}

// Desafio 7 - Entendi melhor sobre o Math.abs neste link https://www.youtube.com/watch?v=DvNeAlmJ3ZU
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  if (distanciaCat1 === distanciaCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(sequenciaNumeros) {
  let sequenciaStrings = [];
  for (lex index = 0; < sequenciaNumeros.length; index += 1) {
    if (sequenciaNumeros[index] % 3 === 0 && sequenciaNumeros[index] % 5 === 0) {
      sequenciaStrings.push('fizzBuzz');
    }
    if (sequenciaNumeros[index] % 3 === 0) {
      sequenciaStrings.push('fizz');
    }
    if (sequenciaNumeros[index] % 5 === 0) {
      sequenciaStrings.push('buzz');
    } else {
      sequenciaStrings.push('bug!');
    }
  }
  return sequenciaStrings;
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
