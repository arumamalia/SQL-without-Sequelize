const connection = require('../models/fikri.js') // import connection

class TransaksiController {
  // Function getAll transaksi table
    getAll(req, res) {
    try {
      // SELECT ALL transaksi data
      const sql = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id ORDER by t.id"

      // Run query
      connection.query(sql, function(err, result) {
        if (err) {
          res.json({
            status: "Error",
            error: err
          });
        } // If error

        // If success it will return JSON of result
        res.json({
          status: "success",
          data: result
        })
      });
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function getOne transaksi table
   getOne(req, res) {
    try {
      // SELECT data from transaksi table where id from params
      const sql = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id WHERE t.id = ?" // make an query varible
      console.log(req.body)
      // Run query
      connection.query(sql, [req.params.id], function(err, result) {
        if (err) {
          res.json({
            status: "Error",
            error: err
          });
        } // If error

        // If success it will return JSON of result
        res.json({
          status: "success",
          data: result[0]
        })
      });
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

   // Function create transaksi table
    create(req, res) {
    try {
      const price = [14000, 24600, 44500]
      let total = req.body.jumlah * price[req.body.id_barang -1]
      let sql = `INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES ('${req.body.id_barang}', '${req.body.id_pelanggan}', ${req.body.jumlah}, ${total})`

      connection.query(sql, (err, result) => {
          if (err) {
            res.json({
              status: "Error",
              error: err
            });
          } // If error

          // If success it will return JSON of result
          const sql = "SELECT t.id as id_transaksi, b.nama as barang, p.nama as pelanggan, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON t.id_pelanggan = p.id ORDER by t.id"
          connection.query(sql, function(err, result) {
            if (err) {
              res.json({
                status: "Error",
                error: err
              });
            } // If error
    
            // If success it will return JSON of result
            res.json({
              status: "success",
              data: result
            })
          });
        }
      )
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function update transaksi table
   update(req, res) {
    try {

      const sql = 'UPDATE transaksi t SET id_barang = ?, id_pelanggan = ?, jumlah = ?, total = ? WHERE id = ?'

      connection.query(
        sql,
        [req.body.id_barang, req.body.id_pelanggan, req.body.jumlah, req.body.total, req.params.id],
        (err, result) => {
          if (err) {
            res.json({
              status: "Error",
              error: err
            });
          } // If error

          // If success it will return JSON of result
          res.json({
            status: 'Success',
            data: result
          })
        }
      )
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

  // Function delete transaksi table
   deleteData(req, res) {
    try {

      const sql = 'DELETE FROM transaksi t WHERE id = ?'

      connection.query(
        sql,
        [req.params.id],
        (err, result) => {
          if (err) {
            res.json({
              status: "Error",
              error: err
            });
          } // If error

          // If success it will return JSON of result
          res.json({
            status: 'Success',
            data: result
          })
        }
      )
    } catch (err) {
      // If error will be send Error JSON
      res.json({
        status: "Error",
        error: err
      })
    }
  }

}

module.exports = new TransaksiController;
