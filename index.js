const express = require("express");
const app = express();
// import route file
const pemasokRoutes = require("./routes/pemasokRoutes");
const transaksiRoutes = require("./routes/transaksiRoutes");
const pelangganRoutes = require('./routes/pelangganRoutes')
const barangRoutes = require('./routes/barangRoutes')

// Import Router
// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/transaksi", transaksiRoutes); 
app.use('/pelanggan',pelangganRoutes);
app.use("/pemasok", pemasokRoutes);
app.use('/barang', barangRoutes);

// Server running
app.listen(3000, () => console.log("Server running on 3000!"));
