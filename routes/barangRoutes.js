const express = require("express");
const router = express.Router();

// Import controller
const barangController = require("../controllers/barangController");

// Define routes
router.get("/", barangController.getAll);
router.post("/", barangController.create);
router.put("/:id", barangController.update);
router.get("/:id", barangController.getOne);
router.delete("/:id", barangController.deleteData);

module.exports = router;