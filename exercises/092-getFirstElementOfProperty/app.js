    function getFirstElementOfProperty(obj, key){
        if (obj[key] && obj[key].length > 0){
            return obj[key][0];
        } else {
            return undefined;
        }
    }


    let output = getFirstElementOfProperty({ key: ['a', 'b', 'c'] }, 'key');
    console.log(output); // --> 'a'