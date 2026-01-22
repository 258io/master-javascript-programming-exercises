function filterEvenElements(arr) {
  let filter=[];
  arr.map(function(num){
    if (num %2 ===0){
     filter.push(num);
    }

  })
    return filter;
}

let output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
