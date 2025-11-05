//Import
const express = require("express");

const {
    getProbes,
    getProbesByName,
    createProbe,
    updateProbe,
    deleteProbe
} = require("../controllers/probes.controller");
const router = express.router();

//GET ALL
router.get("/", getProbes);

//GET by ID
router.get("/:name", getProbesByName);

//CREATE
router.post("/", createProbe);

//UPDATE
router.put("/:name", updateProbe);

//DELETE
router.delete("/:name", deleteProbe);

//Export
module.exports = router;