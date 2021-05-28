const express = require("express");
const router = express.Router();

// Import controller
const pelangganController = require("../controllers/pelangganController");

// Define routes
// router.get("/", transaksiController.getAll);
// router.post("/", transaksiController.create);
// router.put("/:id", transaksiController.update);
// router.get("/:id", transaksiController.getOne);
// router.delete("/:id", transaksiController.deleteData);
router.post("/",pelangganController.creteUser);
router.delete("/",pelangganController.deleteUser);
router.get("/", pelangganController.getAll);
router.put("/", pelangganController.updateUser);

module.exports = router;