/*Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format.
*/
const readlineSync = require("readline-sync");

let serie = {
    name : readlineSync.question ("Please, enter the name of your favorite TV serie : "),
    year : readlineSync.question ("Could you please enter the production year : "),
    cast : function completeCast(c) {
        let cast = [];
        c = readlineSync.question ("Could you please enter the name of the first cast members : ");
        cast.push(c);
        let d = y;
        while (d==y) {
            d = readlineSync.question ("Would do you add one more name of the cast members? y/n");
            let e = readlineSync.question ("The name of cast members is: ");
            cast.push(e);
        }
        return cast;
    }
    askTvSerie : function () {
            return "Your favorite TV serie is "+this.name+", producted in "+this.year+" with "+this.cast+".";
        
    }
}

console.log(serie.askTvSerie())