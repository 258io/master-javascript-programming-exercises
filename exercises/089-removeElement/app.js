function removeElement(array,key){
    return array.filter(item => item !== key);


} 

let output = removeElement([1, 2, 3, 4, 5, 3, 3], 3);
console.log (output) ;