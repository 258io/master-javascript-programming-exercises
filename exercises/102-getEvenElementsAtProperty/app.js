function getEvenElementsAtProperty(obj, key) {

  let evenElements = [];
  if (Array.isArray(obj[key])){ 
    for (let i= 0; i< obj[key].length; i++){
      if (obj[key][i] %2 === 0) {
        evenElements.push(obj[key][i]);
      }
      else return [];
    }

  }  
  return evenElements;
}










let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
