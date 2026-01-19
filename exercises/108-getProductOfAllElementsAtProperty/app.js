function getProductOfAllElementsAtProperty(obj, key) {
    if (obj[key] === undefined || !Array.isArray(obj[key]) || obj[key].length === 0){
        return 0;
    }
    let product = 1;
    for (let i= 0; i < obj[key].length; i ++){
      product = obj[key][i] * product;
    }
    return product;
    
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
