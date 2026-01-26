function average(arr) {
  return sum(arr) / arr.length;
  
}

function sum(arr) {
  return arr.reduce(function(acc,current){
    return acc + current;
  })
  
}

console.log(average([1, 2])); // --> 1.5
