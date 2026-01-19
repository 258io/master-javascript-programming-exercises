function addProperty(obj, key) {
  // your code here
  obj[key]=true;
  return obj;
  
}
let myobj={};
let result= addProperty(myobj, "myproperty");
console.log(myobj.myproperty);