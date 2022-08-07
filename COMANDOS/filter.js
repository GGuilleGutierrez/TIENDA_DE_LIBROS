const readF = require("./read");

module.exports = (key, filtro) => {
    let bdd = readF();
    let filterBdd;
    switch (key){
        case "titulo":
            filterBdd = bdd.filter(element => element.Title.includes(filtro) == true)
            break;
        case "autor":
            filterBdd = bdd.filter(element => element.Author.includes(filtro) == true)
            break;
        case "genero":
            filterBdd = bdd.filter(element => element.Genre.includes(filtro) == true)
            break;
        default:
            return "Ingrese una categoría válida para filtrar."
    }
    if (filterBdd.length == 0){
        filterBdd = "No se encontraron coincidencias."
    }
    return filterBdd
}
