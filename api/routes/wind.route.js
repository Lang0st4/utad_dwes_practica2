//Import
const express = require("express");

const {
    getWind,
    getWindById,
    createWind,
    updateWind,
    deleteWind
} = require("../controllers/wind.controller");
const router = express.router();

//GET ALL
router.get("/", getWind);

//GET by ID
router.get("/:id", getWindById);

//CREATE
router.post("/", createWind);

//UPDATE
router.put("/:id", updateWind);

//DELETE
router.delete("/:id", deleteWind);

//Export
module.exports = router;