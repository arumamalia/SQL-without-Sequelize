const connection = require("../models");
const getAll = (req, res) => {
    let sql = "SELECT * FROM pemasok";

    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
        return res.status(200).json({
            message: "Succes",
            data: result,
        });
    });
};
const getOne = (req, res) => {
    let sql = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
        return res.status(200).json({
            message: "Success",
            data: result[0]
        })
    })
}

const create = (req, res) => {
    //     // console.log(req.body);
      let sqlCreate = `INSERT INTO pemasok (nama) VALUES ('${req.body.nama}')`;
    connection.query(sqlCreate, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal server Error",
                error: err,
            });
        }
        let sqlSelect = `SELECT * FROM pemasok WHERE nama = '${req.body.nama}'`;
    connection.query(sqlSelect,  (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal server Error",
                error: err,
            });
        }
        return res.status(200).json({
            message: "succes",
            data: result,
        });
    });
});
};
const update = (req, res) => {
    let sqlUpdate = `UPDATE pemasok SET nama = '${req.body.nama}' WHERE id = ${req.params.id}`;
    connection.query(sqlUpdate, (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
        let sqlSelect = `SELECT * FROM pemasok WHERE id = ${req.params.id}`;

        // Run select
        connection.query(sqlSelect, (err, results) => {
          // If error
          if (err) {
            return res.status(500).json({
              message: "Internal Server Error",
              error: err,
            });
          }
  
          // If no error
          return res.status(201).json({
            message: "Success",
            data: results[0],
          });
        });
    });
};
const deleteData = (req, res) => {
let sqlCreate = `DELETE FROM barang WHERE id = ${req.params.id}`;
connection.query(sqlCreate, (err, result) => {
    if (err) {
        return res.status(500).json({
            message: "Internal server Error",
            error: err,
        });
    }
    let sql = `DELETE FROM pemasok WHERE id = ?`;
    connection.query(sql, [req.params.id], (err, result) => {
        if (err) {
            return res.status(500).json({
                message: "Internal Server Error",
                error: err,
            });
        }
    return res.status(200).json({
        message: "Succes",
    });
});
})
}
module.exports = { getAll, getOne, create, update, deleteData };