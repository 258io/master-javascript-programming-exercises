let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
   for (let  key in obj){ if (obj[key] < num){
       delete obj[key];
    }
    
}return obj; 
}
let output = removeNumbersLessThan(5, obj);
 console.log(obj);