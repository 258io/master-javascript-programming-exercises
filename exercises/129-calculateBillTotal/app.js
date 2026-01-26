function calculateBillTotal(preTaxAndTipAmount) {
     let impuestos = 9.5/100;
     let propina = 15/100;
     return preTaxAndTipAmount + (preTaxAndTipAmount * impuestos) + (preTaxAndTipAmount * propina);    
}

let output = calculateBillTotal(20);
console.log(output); // --> 24.9
