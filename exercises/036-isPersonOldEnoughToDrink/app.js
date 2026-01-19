function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21){
    return true;
  }
  else return false;
}


let person={
  age:16,
};

let drink = isPersonOldEnoughToDrink(person);
console.log(drink);