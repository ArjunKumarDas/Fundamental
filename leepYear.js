
function isLeepYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        result = true;
    } 
    else{
        result = false;
    }
    return result;
}

const checkYear1 = isLeepYear(2020);
const checkYear2 = isLeepYear(1700);
console.log(checkYear1, checkYear2);


