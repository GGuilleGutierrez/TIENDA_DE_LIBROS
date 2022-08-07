const uploadF = require("./COMANDOS/upload");
const readF = require("./COMANDOS/read");
const editF = require("./COMANDOS/edit");
const deleteF = require("./COMANDOS/delete");
const filterF = require("./COMANDOS/filter");

switch (process.argv[2]){
    case "new":            // titulo            autor            genero            año             costo             precio
        console.log(uploadF(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8]));
        break
    case "read":
        console.log(readF());
        break
    case "edit":      // ID de libro a editar  titulo final   autor final      genero final      año final       costo final       precio final 
        console.log(editF(process.argv[3], process.argv[4], process.argv[5], process.argv[6], process.argv[7], process.argv[8], process.argv[9]));
        break
    case "delete":
        console.log(deleteF(process.argv[3])); //Ingresar el ID del libro a eliminar.
        break
    case "filter":
        console.log(filterF(process.argv[3], process.argv[4])); // En process.argv[3] ingresamos si queremos filtrar por "titulo", "autor" o "genero".  
        break                                                   // En process.argv[4] ingresamos la palabra a filtrar.
    default:
        console.log("Ingrese un comando válido.");
}