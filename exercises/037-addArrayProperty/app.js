function addArrayProperty(obj, key, arr) {
  obj[key]=arr;
  return obj;
}


let objeto= {};
let myarray= [1,3,5];

let total= addArrayProperty(objeto, "esto es un string", myarray);

console.log(total);

