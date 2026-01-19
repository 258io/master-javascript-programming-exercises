function checkAge(name, age) {
   if(age<=21){
    result = "vete a casa" + name;
   }
   else result= " bienvenido" + name;

   return result;  
}

let check= checkAge("Antonio", 18);
console.log(check);