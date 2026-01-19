function getEvenLengthWordsAtProperty(obj, key) {
    let result = [];
    if (Array.isArray(obj[key])) {
        for (let word of obj[key]) {
            if (word.length % 2 === 0) {
                result.push(word);
            }
        }
    }
    return result;
    
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
