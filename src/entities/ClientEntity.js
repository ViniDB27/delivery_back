const connection = require("../database/mysql");

module.exports = class ClientEntity {
  getAll() {
    connection.connect();
    connection.query(
      "SELECT * FROM clients",
      function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
      }
    );

    connection.end();
  }
};
