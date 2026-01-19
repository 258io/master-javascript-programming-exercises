function getElementsLessThan100AtProperty(obj, key) {
    if (Array.isArray(obj[key])){
        return obj[key].filter(item => item <100);
    }

    else return [];
        
}


let obj = {
  key: [1000, 20, 50, 500]
};
let output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); 