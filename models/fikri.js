const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "default1",
  database: "penjualan_afternoon",
});

module.exports = connection;