// server/routes/karjeraiRoutes.js
const express = require("express");
const router = express.Router();
const karjeraiController = require("../controllers/karjeraiController");

// CRUD
router.get("/", karjeraiController.getAll);
router.get("/:id", karjeraiController.getById);
router.post("/", karjeraiController.create);
router.put("/:id", karjeraiController.update);
router.delete("/:id", karjeraiController.remove);

module.exports = router;
