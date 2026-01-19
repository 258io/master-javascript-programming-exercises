function countCharacter(str, char) {
    let count= 0;
    for (let i=0; i< str.length; i++) {
        if (str[i] === char) {
            count= count +1;

        }
    
    }
    return count;
    
}
    


let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
