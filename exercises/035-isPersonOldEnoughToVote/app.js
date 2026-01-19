function isPersonOldEnoughToVote(person) {
  if (person.age >= 18)
{return true;}
  else {return false;}  
}

let person ={
  age:19,
}

let votacion= isPersonOldEnoughToVote(person)
console.log(votacion);
