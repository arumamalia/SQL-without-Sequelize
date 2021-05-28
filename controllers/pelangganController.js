const connection = require("../models/index.js");


const creteUser = (req,res)=>{
    //create new user 
    let sqlNewUser = `INSERT INTO pelanggan(nama) VALUES (${req.body.nama})`;

    //call and run query to postman
    connection.query(sqlNewUser,(err,results)=>{
        //error handle
        if(err){
            return res.status(500).json({
                message: `Internal Server Error`,
                error:err,
            })
        }
        //show updated user
        let sqlSelect = `SELECT * FROM pelanggan`;
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
            data: results,
          });

    })
    })
}
const updateUser = (req,res)=>{
  //create new user 
  let sqlUpdateUser = `UPDATE pelanggan set nama = ${req.body.nama} WHERE id = ${req.body.id_pelanggan}`;

  //call and run query to postman
  connection.query(sqlUpdateUser,(err,results)=>{
      //error handle
      if(err){
          return res.status(500).json({
              message: `Internal Server Error`,
              error:err,
          })
      }
      //show updated user
      let sqlSelect = `SELECT * FROM pelanggan`;
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
          data: results,
        });

  })
  })
}
const deleteUser = (req,res)=>{
  //create new user 
  let sqlNewUser = `delete from pelanggan where nama =  (${req.body.nama})`;

  //call and run query to postman
  connection.query(sqlNewUser,(err,results)=>{
      //error handle
      if(err){
          return res.status(500).json({
              message: `Internal Server Error`,
              error:err,
          })
      }
      //show updated user
      let sqlSelect = `SELECT * FROM pelanggan`;
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
          data: results,
        });

  })
  })
}
const getAll = (req, res) => {
  // Get all query
  let sql =
    "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id";

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
module.exports = { creteUser,deleteUser,getAll, updateUser};