const readF = require("./read");
const writeF = require("./writeJson");

module.exports = (ID, newTitle, newAuthor, newGenre, newYear, newCost, newPrice) => {
    let bdd = readF();
    let resp = "ID inválido, intente nuevamente."
    let elemento;
    bdd.forEach(function(element, i){
        if (element.ID == ID){
            element.Title = newTitle;
            element.Author = newAuthor;
            element.Genre = newGenre;
            element.Year = newYear;
            element.Cost = newCost;
            element.Price = newPrice;
            writeF(bdd);
            resp = "El producto se modificó exitosamente: "
            elemento = bdd[i]
        }
    })
    console.log(resp);
    console.log(elemento);
}