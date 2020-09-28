const readlineSync = require("readline-sync");

/*WHILE
let i = 1
    while (i<=100) {
        if (i%2===0) {
            console.log(i+"/2= " + i/2);
        }
        else {
            console.log(i+"*3= " + i*3);
        }
        i++;
    }
*/

for (let i = 2; i <=100; i+=2) {
    console.log(i/2);
}
for (let i = 1; i <= 100; i+=2) {
    console.log(i*3);
}
