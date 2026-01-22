function getLengthOfShortestElement(arr) {
    if (arr.length===0)
        return 0;

    return arr.reduce((min, current)=>{
        return Math.min(min,current.length);
    },Infinity);

    
    
};

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
