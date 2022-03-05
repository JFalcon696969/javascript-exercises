const repeatString = function(string, rep) {
    if(rep < 0){
        return "ERROR"
    }
    let repeatedString = '';
    for(let i = 0; i < rep; i++){
        repeatedString += string
    }
    return repeatedString
};

// Do not edit below this line
module.exports = repeatString;
