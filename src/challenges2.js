// Desafio 10
function techList(array,name) {
  array.sort()
  let arrayWithObject=[];
  for(let index=0;index<array.length;index+=1){
      techonology=array[index];
     let newObject={
        tech:techonology,
        name:name
      }
      arrayWithObject.push(newObject); 
    }
  if(array.length<=0){
      return "Vazio!" 
    }
  else{
   return arrayWithObject;
  }
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
