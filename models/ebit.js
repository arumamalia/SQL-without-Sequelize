const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:"localhost",
    user: "quintus",
    password: "saragih2025",
    database: "penjualan_afternoon",

});

module.exports = connection;