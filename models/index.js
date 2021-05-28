const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "najmul",
    password:"@Najmul1997",
    database: "penjualan",
});
module.exports = connection;