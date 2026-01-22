function filterOddElements(arr) {
  let filtered= [];
  arr.map(function(num){
    if (num %2 !==0){
      filtered.push(num);
      
    }
  });
  return filtered;
}
  


let output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
