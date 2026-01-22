function squareElements(arr) {
  let square=[];
  arr.map(num=> num**2) 
  .forEach (num=> square.push(num));
   return square;
  
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]
