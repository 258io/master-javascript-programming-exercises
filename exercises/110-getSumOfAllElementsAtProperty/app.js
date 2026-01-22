function getSumOfAllElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key])|| obj[key]===undefined || obj[key].length===0){
        return 0;
    }
    let sum=0;
    for (let num of obj[key]){
        sum +=num;
    }
    
    return sum;
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
