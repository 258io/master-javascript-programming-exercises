function computeFactorialOfN(n) {
    let factor= 1;
    let i= 0;
    while (i<n){
        i++;
        factor = factor * i;
    }
    return factor;
}

let output = computeFactorialOfN(4);
console.log(output); // --> 24
