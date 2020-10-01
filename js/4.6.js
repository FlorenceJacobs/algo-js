const readlineSync = require("readline-sync");

let a = new Number(readlineSync.question ("Please, enter a number to factorialize: "));

/* WHILE
function factorial(a) {
    if ((a==0)||(a==1)) {
        return 1;
    }
    var result = a;
    while (a>1) {
            result=result*(a-1);
            a--;
        }
    return result;
}
console.log("The result of the factorial is: "+factorial(a))

===> En utilisant une fonction récursive, on n'a plus besoin de décrémenter (a), car la fonction s'appelle elle-même, le a decrémente chaque fois.
*/
function factorial(a) {
    if ((a==0)||(a==1)) {
        return 1;
    }
    while (a>1) {
        return (a*factorial(a-1))
    }
}
console.log("The result of the factorial is: "+factorial(a))

/* FOR
function factorial(a) {
    if ((a==0)||(a==1)) {
        return 1;
    }
    for (let i=1; i<= a; i++)
        let result = result*i;
        return result;
    }
}
console.log("The result of the factorial is: "+factorial(a))

==> COMME JOANN
function factorial(a){
    return (a == 0)? 1 : a * factorial(a-1);
}
*/