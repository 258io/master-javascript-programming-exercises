function joinThreeArrays(arr1, arr2, arr3) {
   return arr1.concat(arr2, arr3);
   

  
}

let output = joinThreeArrays([1, 2], ['a', 'b'], [true, false]);
console.log(output); // --> [1, 2, 'a', 'b', true, false]