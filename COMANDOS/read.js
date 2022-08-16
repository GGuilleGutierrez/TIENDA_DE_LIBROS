const fs = require('fs');

// Bien resuelto el "read", me gustó como le das una reutilización para leer la BDD previamente cuando se ejecutan los otros comandos también.
module.exports = () =>{
    let objLit = JSON.parse(fs.readFileSync("./BDD.Json", "utf8"));
    return objLit;
}
