const readF = require("./read");
const writeF = require("./writeJson");

module.exports = (Title, Author, Genre, Year, Cost, Price) => {
    let bdd = readF();
    let ID = bdd.length + 1;
    bdd.push({ID, Title, Author, Genre, Year, Cost, Price});
    writeF(bdd);
    console.log("El producto se creó exitosamente. Con ID = " + ID + ".");
}
