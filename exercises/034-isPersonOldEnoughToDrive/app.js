function isPersonOldEnoughToDrive(person1) {
   
  if (person1.age>=16){
    return true;
   }

   else{
  return false;}

}

let person1 = {
  age:12,
};


let drive= isPersonOldEnoughToDrive(person1);
console.log(drive);


