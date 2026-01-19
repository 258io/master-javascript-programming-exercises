function isEvenAndGreaterThanTen(x){
    if (x%2===0 && x>10){
        return true;
    }
    else return false;
}

let output=isEvenAndGreaterThanTen(13);
console.log(output);