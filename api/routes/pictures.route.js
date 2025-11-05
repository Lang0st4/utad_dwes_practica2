//Import
const express = require("express");

const {
    getPictures,
    getPicturesById,
    createPicture,
    updatePicture,
    deletePicture
} = require("../controllers/pictures.controller");
const router = express.router();

//GET ALL
router.get("/", getPictures);

//GET by ID
router.get("/:id", getPicturesById);

//CREATE
router.post("/", createPicture);

//UPDATE
router.put("/:id", updatePicture);

//DELETE
router.delete("/:id", deletePicture);

//Export
module.exports = router;