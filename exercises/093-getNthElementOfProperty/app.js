function getNthElementOfProperty(obj, key, n){
    if (obj[key] && obj[key].length > n){
        return obj[key][n];
    }
    return undefined;
}

let output = getNthElementOfProperty({myProperty: [1, 2, 3]}, 'myProperty', 1);
console.log(output); // --> 2