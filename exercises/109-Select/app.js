function select (arr, object) {
    let newObject={};
    for (let key in object){
        if (arr.includes(key)){
            newObject[key]=object[key];
        }
}
    return newObject;
}


let arr = ['a', 'c', 'e'];
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
let output = select(arr, obj);
console.log(output);