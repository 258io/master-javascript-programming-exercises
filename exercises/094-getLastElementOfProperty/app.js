function getLastElementOfProperty(obj, key){
    if (obj[key] && obj[key].length > 0){
        return obj[key][obj[key].length - 1];
    }
    return undefined;
}

let output = getLastElementOfProperty({ a: [1, 2, 3] }, 'a');
console.log(output); // --> 3