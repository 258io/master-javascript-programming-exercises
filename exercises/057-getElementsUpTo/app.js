function getElementsUpTo(array, n) {
      arrayfinal= array.slice(0,n);

      return arrayfinal;
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
