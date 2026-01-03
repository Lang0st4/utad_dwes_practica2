//Import
const picturesModel = require("../models/nosql/pictures.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getPictures = async (req, res) => {
    try {
        const data = await picturesModel.find()
        handleHTTPResponse(res, "Pictures retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Pictures couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getPicturesById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await picturesModel.findById(id);
        handleHTTPResponse(res, "Pictures retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Pictures couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createPicture = async (req, res) => {
    try {
        const body = req.body;
        const data = await picturesModel.create(body);
        handleHTTPResponse(res, "Pictures created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Pictures couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updatePicture = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await picturesModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Pictures updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Pictures couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deletePicture = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await picturesModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Pictures couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getPictures,
    getPicturesById,
    createPicture,
    updatePicture,
    deletePicture
};