function isOldEnoughToDrive(age) {
  if (age>=16){
    result = " tienes edad para conducir "
  }
  else result= "eres menor, no puedes beber"

  return result;
  
}

let edad = isOldEnoughToDrive(12);
console.log(edad);