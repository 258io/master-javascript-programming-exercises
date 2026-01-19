function joinArrays(arr1, arr2) {
  let arrays= arr1.concat(arr2);
  return arrays
  
}

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]
