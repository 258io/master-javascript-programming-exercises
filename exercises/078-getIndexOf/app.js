    // Write your function here --- IGNORE ---
function getIndexOf(character, string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            return i;
        }
    }
    return -1; // Return -1 if the character is not found
}

console.log(getIndexOf("a", "apple"));
