
var array = [1, 2, 3, 4, 5];

var sum = array.reduce(function(a, b,){
return a + b;
});


console. log(sum);


const roundDecimal = function (value,decimal) {
    if((value - Math.floor(value))=0){
        return value
    } else if ((value - Math.floor(value))>0) {
        return value - Math.floor(value)
    } else {
        
    }
}

console.log(roundDecimal(5.5))


const int_round5 = function (value) {
    return Math.ceil(value/5)*5;
} 

console.log(int_round5(45))


const getDiff = function (day,month,year) {
    const currentDate = new Date();

    const a = currentDate.getFullYear() - year;
    const b = currentDate.getMonth() - month;
    const c = currentDate.getDate() - day;
    
    return'years '+a + ' month ' + b + ' day ' + c
}


console.log(getDiff(03,08,1990))