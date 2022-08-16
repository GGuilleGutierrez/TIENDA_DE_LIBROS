const readF = require("./read");
const writeF = require("./writeJson");
//bdd = base de datos
module.exports = (Title, Author, Genre, Year, Cost, Price) => {
    let bdd = readF();
    // Recomiendo primero chequear mediante un filter o un find to bdd para constatar que no se está repitiendo el ID, el caso en que se borra un libro que
    // no haya sido el último en añadirse haría que al siguiente libro en uploadear coincida su ID con el del último libro añadido hasta el momento.
    // Mediante un chequeo previo esto se puede evitar, agregando la lógica necesaria para modificar el ID en un nuevo valor, que nuevamente habría que chequear.
    let ID = bdd.length + 1;
    bdd.push({ID, Title, Author, Genre, Year, Cost, Price});
    writeF(bdd);
    console.log("El producto se creó exitosamente. Con ID = " + ID + ".");
}
