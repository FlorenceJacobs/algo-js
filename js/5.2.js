const readlineSync = require("readline-sync");

function randomizeCast(serie) {
    var m = serie.cast.length, tmp, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      tmp = serie.cast[m];
      serie.cast[m] = serie.cast[i];
      serie.cast[i] = tmp;
    }
    return serie.cast;
}

function askTvSerie(existArray=false) {
    let d;
    let serie = {};
        serie.name = readlineSync.question ("Please, enter the name of your favorite TV serie : ");
        serie.year = readlineSync.question ("What's the production year : ");
        serie.cast = [];
            if (existArray == false) {
                do {
                    let c = readlineSync.question ("Could you please enter the name of the one cast member : ");
                    serie.cast.push(c);
                    d = readlineSync.question ("Would do you add one more name of the cast members? y/n : ");
                }
                while (d =="y") {};
                existArray == true;
            }
            else {
                serie.cast = randomizeCast(existArray);
            }
            return serie;
}

let serie = new askTvSerie();
console.log(JSON.stringify(serie));

let newSerie = new askTvSerie(serie);
console.log(JSON.stringify(newSerie));