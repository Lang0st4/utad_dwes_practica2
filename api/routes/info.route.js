//Import
const express = require("express");

const {
    getInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo
} = require("../controllers/info.controller");
const router = express.router();

//GET ALL
router.get("/", getInfo);

//GET by ID
router.get("/:id", getInfoById);

//CREATE
router.post("/", createInfo);

//UPDATE
router.put("/:id", updateInfo);

//DELETE
router.delete("/:id", deleteInfo);

//Export
module.exports = router;