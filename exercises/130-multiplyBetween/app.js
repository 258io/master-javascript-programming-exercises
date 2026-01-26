function multiplyBetween(num1, num2) {
       if (num2 < num1) return 0;
       let product= 1;

       let numbers = [];
       while (num1 < num2) {
               numbers.push(num1);
               num1++;
       }
       return numbers.reduce(function(total,curent){
        return total * curent;
       })
}

let output = multiplyBetween(2, 5);
console.log(output); // --> 24
