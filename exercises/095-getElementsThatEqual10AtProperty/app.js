function getElementsThatEqual10AtProperty(obj, key) {

    if(obj[key]&&(obj[key].length===10)){
        return obj[key].filter(element=>element===10);
    }
    else return [];
}

let output = getElementsThatEqual10AtProperty({ key: [1000, 10, 50, 10, 10, 10, 10, 10, 10, 10] }, 'key');
console.log(output); // --> [10, 10, 10, 10, 10, 10, 10]