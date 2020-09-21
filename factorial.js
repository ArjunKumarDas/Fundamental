// factorial with for loop 
// initial value (i = 0;) is most important in this case.

let i = 1; 
for(var i = 1; i<=10; i++){
 console.log(i);
}

// functiopn with for loop
 
function factorial(n){
    let factorial = 1;
    for(var i = 1; i <= n; i++){
       factorial = factorial * i;
    }
    return factorial;
}
let result = factorial(10);
console.log(result);