const fs = require('fs');

module.exports = () =>{
    let objLit = JSON.parse(fs.readFileSync("./BDD.Json", "utf8"));
    return objLit;
}