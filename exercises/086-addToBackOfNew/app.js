function addToBackOfNew(arr, element) {
    let newarray= arr.slice([0],[arr.length]);
    newarray.push(element);
    return newarray;    
    
}

let input = [1, 2];
let output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]
