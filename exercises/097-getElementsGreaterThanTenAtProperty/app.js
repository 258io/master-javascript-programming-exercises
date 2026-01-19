// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    if (Array.isArray(obj[key])){
        return obj[key].filter(item => item >10);
    }

    else return [];
        
}

let obj = {
  key: [1, 20, 30]
};
let output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output);