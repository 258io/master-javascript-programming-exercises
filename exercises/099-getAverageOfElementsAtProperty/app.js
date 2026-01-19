function getAverageOfElementsAtProperty(obj, key) {
    if (Array.isArray(obj[key]))
      {
        return obj[key].reduce((acc, curr) => acc + curr, 0) / obj[key].length;
    }
     return 0;

    

        }





let obj = {
  key: [1, 2, 3]
};

let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output);