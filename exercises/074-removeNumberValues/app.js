function removeNumberValues(obj) {
    for ( let key in obj){
        if (obj[key]===Number(obj[key])){
            delete obj[key];
        }
    }
    return obj;
    
}

let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
