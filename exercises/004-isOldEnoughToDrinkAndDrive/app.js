function isOldEnoughToDrinkAndDrive(age) {
  if (age>=21){
    result= "puedes beber y conducir ";
  }
  else if(16<=age<21) {result=  "puedes beber pero no puedes conducir ";}
  else if (age<16){
    result = "no puedes conducir ni beber";
  }
  return result;

   
  
}

let edad = isOldEnoughToDrinkAndDrive(20);
console.log(edad);