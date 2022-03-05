const sumAll = function(start, end) {
    if(start < 0 | end < 0 | typeof start != "number" | typeof end != "number"){
        return "ERROR"
    }

    if(start === end){
        return start
    }

    return start < end ? sumAll(start+1, end) + start : sumAll(start-1, end) + start
};

// Do not edit below this line
module.exports = sumAll;
