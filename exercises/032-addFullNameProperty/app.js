function addFullNameProperty(obj) {
       obj.fullname = obj.firstname +" "+ obj.lastname;
       return obj;

  
}

let person={

  firstname:"Jade",
  lastname: "Smith"
};

addFullNameProperty(person);
console.log(person.fullname);