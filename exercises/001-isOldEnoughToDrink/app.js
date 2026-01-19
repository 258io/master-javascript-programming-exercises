function isOldEnoughToDrink(age) {

    if (age>=21){
        result= "Tienes edad para beber";
    }
    else { result="No puedes beber, eres menor"};

    return result;    
}


let output= isOldEnoughToDrink(25);
console.log(output);