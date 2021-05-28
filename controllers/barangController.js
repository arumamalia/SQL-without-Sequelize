// Import database connection
const connection = require("../models/lia.js");

// Get all transaksi data
const getAll = (req, res) => {
  // Get all query
  let sql =
    "SELECT b.id as id_barang, b.nama as nama_barang, b.harga, b.id_pemasok,pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id";

  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

const getOne = (req, res) => {
  // Get One Query
  let sql = `SELECT b.id as id_barang, b.nama as nama_barang, b.harga, b.id_pemasok,pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ${req.params.id}`;

  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

const create = (req, res) => {
  // Find barang to get the price
  let sqlCreate = `INSERT INTO barang(nama, harga, id_pemasok) VALUES ('${req.body.nama_barang}', '${req.body.harga_barang}', ${req.body.id_pemasok})`;

  // Run Query
  connection.query(sqlCreate, (err, results) => {

    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    let sqlSelect = `SELECT b.id as id_barang, b.nama as nama_barang, b.harga, b.id_pemasok, pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ${results.insertId}`;

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

const update = (req, res) => {
  // Find barang to get the price
  let sqlFindPemasok = `SELECT * FROM pemasok WHERE id = ${req.body.id_pemasok}`;

  connection.query(sqlFindPemasok, (err, results) => {
    // To get barang price

    let sqlUpdate = `UPDATE barang SET nama = '${req.body.nama_barang}', harga = '${req.body.harga_barang}', id_pemasok = ${req.body.id_pemasok} WHERE id = ${req.params.id}`;

    connection.query(sqlUpdate, (err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      // If no error
      let sqlSelect = `SELECT b.id as id_barang, b.nama as nama_barang, b.harga, b.id_pemasok,pem.nama as nama_pemasok FROM barang b JOIN pemasok pem ON b.id_pemasok = pem.id WHERE b.id = ${req.params.id}`;

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
  });
};

const deleteData = (req, res) => {
  // Delete Query
  let sql = "DELETE FROM barang WHERE id = ?";

  // Run Query
  connection.query(sql, [req.params.id], (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
    });
  });
};

module.exports = { getAll, getOne, create, update, deleteData };
