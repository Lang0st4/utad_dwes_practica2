//Import
const express = require("express");

const {
    getAirQuality,
    getAirQualityById,
    createAirQuality,
    updateAirQuality,
    deleteAirQuality
} = require("../controllers/airQuality.controller");
const router = express.router();

//GET ALL
router.get("/", getAirQuality);

//GET by ID
router.get("/:id", getAirQualityById);

//CREATE
router.post("/", createAirQuality);

//UPDATE
router.put("/:id", updateAirQuality);

//DELETE
router.delete("/:id", deleteAirQuality);

//Export
module.exports = router;