function computeSummationToN(n) {
  let sum =0;
  let i= 1;

   while(i <=n){
      sum +=i;
      i++;
      if(i>n){
         return sum;
   }
      
   }
}

let output = computeSummationToN(6);
console.log(output); // --> 21

