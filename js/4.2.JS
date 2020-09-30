/* DOCUMENTATION
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
*/

const readlineSync = require("readline-sync");

function rand10(n) {
    return Math.floor(Math.random()*11);
}
console.log(rand10());