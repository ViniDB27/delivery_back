const mysql = require("mysql");

const  connection = mysql.createConnection({
  user: "root",
  password: "root",
  database: "delivery",
  host: "localhost",
  pool: 3306,
});

module.exports = connection;
