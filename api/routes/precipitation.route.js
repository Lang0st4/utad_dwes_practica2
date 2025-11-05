//Import
const express = require("express");

const {
    getPrecipitation,
    getPrecipitationById,
    createPrecipitation,
    updatePrecipitation,
    deletePrecipitation
} = require("../controllers/precipitation.controller");
const router = express.router();

//GET ALL
router.get("/", getPrecipitation);

//GET by ID
router.get("/:id", getPrecipitationById);

//CREATE
router.post("/", createPrecipitation);

//UPDATE
router.put("/:id", updatePrecipitation);

//DELETE
router.delete("/:id", deletePrecipitation);

//Export
module.exports = router;