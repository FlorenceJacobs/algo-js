const readlineSync = require("readline-sync");

let n = new Number(readlineSync.question ("Please, enter the length of an array: "));
let array = [];

function multiRand(n) {
    for (let i=0; i<n; i++) {
        element = rand10 ()
        array.push(element)
    }
    return array;
}

function rand10() {
    return Math.floor(Math.random()*11);
    }

multiRand(n);
console.log("This is an array of "+n+" random numbers : ["+array+"]");

/* COMMENTAIRE :
Il est possible de simplifier en appelant directement la fonction (rand10()) dans le array.push
=> array.push(rand10())
Du coup, plus besoin de passer par "element"

Ne pas oublier RETURN dans chaque fonction
FIN DU COMMENTAIRE */