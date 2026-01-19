// Write your function here
function computeAverageOfNumbers(numbers){

    if (numbers.length ===0) {
        return 0;
    }
    else {
        let sum=0;
        for (let i=0; i<numbers.length; i++)
            {
            sum = sum + numbers[i];
        }

        let promedio= sum /numbers.length;
        return promedio;
    }


 
}

let numberarray= [1,2,3,4];
let result = computeAverageOfNumbers(numberarray);
console.log(result);