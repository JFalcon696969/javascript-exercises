const removeFromArray = function(arr, ...elements) {
    //Step 1: Idenitfy whether elements are in array

    //Step 2: Remove elements in array
    //Step 3: Return new array
    for(let i = 0; i < elements.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(elements[i] === arr[j]){
                arr.splice(j, 1)
            }
        }
    }

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
