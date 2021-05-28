const express = require("express");
const router = express.Router();
const pemasokController = require("../controllers/pemasokController");
router.get("/", pemasokController.getAll);
router.post("/", pemasokController.create);
router.put("/:id", pemasokController.update);
router.get("/:id", pemasokController.getOne);
router.delete("/:id", pemasokController.deleteData);
module.exports = router;