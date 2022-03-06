const palindromes = function (string) {
    string = string.toLowerCase();
    let re = /\w+/g
    let stringArray = string.match(re);
    string = stringArray.join('');
    
    for (i = 0; i < string.length/2; i++){
        if(string[i] !== string[string.length - 1 - i]){
            return false
        }
    }
    return true
};



// Do not edit below this line
module.exports = palindromes;
