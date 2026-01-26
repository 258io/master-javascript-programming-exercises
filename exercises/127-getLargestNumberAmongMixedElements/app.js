function getLargestNumberAmongMixedElements(arr) {
    if (arr.length === 0) return 0;
  
    
    const numbers = arr.filter(element => typeof element === "number");
   
     if (numbers.length === 0)
        return 0;
     return Math.max(...numbers); 
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
