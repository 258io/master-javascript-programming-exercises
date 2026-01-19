function getAllElementsButNth(array, n) {
    let result=[];
    for (let i = 0; i < array.length; i++) {
        if (i !== n) {
            result.push(array[i]);
        }
    }
    return result;
    

}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
