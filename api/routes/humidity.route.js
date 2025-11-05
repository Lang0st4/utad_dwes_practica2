//Import
const express = require("express");

const {
    getHumidity,
    getHumidityById,
    createHumidity,
    updateHumidity,
    deleteHumidity
} = require("../controllers/humidity.controller");
const router = express.router();

//GET ALL
router.get("/", getHumidity);

//GET by ID
router.get("/:id", getHumidityById);

//CREATE
router.post("/", createHumidity);

//UPDATE
router.put("/:id", updateHumidity);

//DELETE
router.delete("/:id", deleteHumidity);

//Export
module.exports = router;