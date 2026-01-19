function convertDoubleSpaceToSingle(str) {
    let strArray = str.split(" ");
    let palabrasjuntas = [];

    for ( let i=0; i<strArray.length; i++){
         if (strArray[i] !== "") {
            palabrasjuntas.push (strArray[i]);
         }
    }

    return palabrasjuntas.join(" "); 
    // your code here
    
}

let output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"
