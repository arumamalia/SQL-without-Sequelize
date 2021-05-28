const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "arumamalia",
  password: "@Liamaliarum1997",
  database: "penjualan_afternoon",
});

module.exports = connection;