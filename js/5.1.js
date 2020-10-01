/*Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
*/
const readlineSync = require("readline-sync");

function askTvSerie() {
    let d;
    let serie = {};
        serie.name = readlineSync.question ("Please, enter the name of your favorite TV serie : ");
        serie.year = readlineSync.question ("What's the production year : ");
        serie.cast = [];
            do {
                let c = readlineSync.question ("Could you please enter the name of the one cast member : ");
                serie.cast.push(c);
                d = readlineSync.question ("Would do you add one more name of the cast members? y/n : ");
            }
            while (d =="y") {};
            return serie;
}

console.log(JSON.stringify(askTvSerie()));