function getLongestWordOfMixedElements(arr) {
          if( arr.length === 0 ) return "";

        const words = arr.filter(el => typeof el === "string");
         if (words.length === 0 ) return "";

        return words.reduce ((longest, current)=> {
            if (current.length > longest.length){
                longest = current;
            }
            return longest;
        }, "" );
        }
        


let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
