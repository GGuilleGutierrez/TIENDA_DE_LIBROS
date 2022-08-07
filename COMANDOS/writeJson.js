const fs = require("fs");

module.exports = (data) => {
  fs.writeFileSync("./BDD.Json", JSON.stringify(data, null, 2))
}