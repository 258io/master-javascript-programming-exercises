function getElementOfArrayProperty(obj, key, index) {
    

    if (Array.isArray(obj[key]) === false || index >= obj[key].length || key === undefined) {
        return undefined;
    
    }
 return obj[key][index];
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
