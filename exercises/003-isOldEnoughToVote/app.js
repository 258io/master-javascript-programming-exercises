function isOldEnoughToVote(age) {
  if (age>=18){
    result= "no puedes votar"
  }
  else result=" puedes votar"
  return result;
}

let votar = isOldEnoughToVote(23);
console.log(votar);
