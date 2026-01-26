function computeSumBetween(num1, num2) {
      if (num1 > num2) return 0;
     let sum = 0;

      while ( num1 < num2){
           sum += num1;
           num1 ++;
          
      }
      

        return sum;

}

let output = computeSumBetween(2, 5);
console.log(output); // --> 9
