function getLargestElementAtProperty(obj, key) {
    if (!Array.isArray(obj[key])){
        return [];
    }
    return Math.max(...obj[key]);
}


let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
