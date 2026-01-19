function removeStringValues(obj) {
    for (let key in obj) {
        if (obj[key] === String(obj[key])) {
            delete obj[key];
        }
    }
    return obj;
    
}

let obj = {
    name: 'Sam',
    age: 20
}

removeStringValues(obj);
console.log(obj); // --> { age: 20 }
