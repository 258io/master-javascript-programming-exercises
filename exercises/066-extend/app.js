let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    b: 4,
    c: 3
};

function extend(obj1, obj2) {
    for (let key in obj2){
        if (obj1[key]===undefined){
            obj1[key]= obj2[key];
}       
    }
     return obj1;
}

let output= extend(obj1, obj2);
console.log(output); // --> { a: 1, b: 4, c: 3 }