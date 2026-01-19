function getSquaredElementsAtProperty(obj, key) {
    if (!Array.isArray(obj[key])){
      return [];
    }

    return obj[key].map(function (element){
      return element * element;
    });


};

let obj = {
  key: [2, 1, 5]};

let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]

