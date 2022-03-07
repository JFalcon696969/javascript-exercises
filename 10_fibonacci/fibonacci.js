let fibonacci = function(number) {

    if(number < 0) return "OOPS";

    let pre1 = 0;
    let pre2 = 1;
    let fib;

    for(let i = 1; i <= number; i++){
        fib = pre1 + pre2;
        pre2 = pre1;
        pre1 = fib;
    }

    return fib
};

fibonacci = function(number){
    if(number < 0) return "OOPS";
    if(number == 0) return 0;
    if(number == 1) return 1;
    return fibonacci(number-1) + fibonacci(number-2)
}


// Do not edit below this line
module.exports = fibonacci;
