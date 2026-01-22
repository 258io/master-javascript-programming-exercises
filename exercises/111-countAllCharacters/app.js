function countAllCharacters(str){
    if (str.length === 0) return {};
    const charCount= {};
    for (let char of str){
        if (charCount[char]){
            charCount[char] += 1;
        } else {
            charCount[char] = 1;
        }
    }
    return charCount;
}





let output = countAllCharacters('banana');
console.log(output);