const readF = require("./read");
const writeF = require("./writeJson");

module.exports = (ID) => {
    let bdd = readF();
    let resp = "ID inválido, intente nuevamente."
    bdd.forEach(function(element, i){
        if (element.ID == ID){
            bdd.splice(i, 1);
            bdd.forEach(function(element , i){
                element.ID = i + 1 ;
            })
            writeF(bdd)
            resp = "El producto se eliminó exitosamente."
        }
    })
    console.log(resp);
}