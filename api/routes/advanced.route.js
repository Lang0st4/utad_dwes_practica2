//Import
const express = require("express");

const {
    getAdvanced,
    getAdvancedById,
    createAdvanced,
    updateAdvanced,
    deleteAdvanced
} = require("../controllers/advanced.controller");
const router = express.router();

//GET ALL
router.get("/", getAdvanced);

//GET by ID
router.get("/:id", getAdvancedById);

//CREATE
router.post("/", createAdvanced);

//UPDATE
router.put("/:id", updateAdvanced);

//DELETE
router.delete("/:id", deleteAdvanced);

//Export
module.exports = router;