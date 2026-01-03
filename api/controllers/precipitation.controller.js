//Import
const precipitationModel = require("../models/nosql/precipitation.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getPrecipitation = async (req, res) => {
    try {
        const data = await precipitationModel.find();
        handleHTTPResponse(res, "Precipitation retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Precipitation couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getPrecipitationById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await precipitationModel.findById(id);
        handleHTTPResponse(res, "Precipitation retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Precipitation couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createPrecipitation = async (req, res) => {
    try {
        const body = req.body;
        const data = await precipitationModel.create(body);
        handleHTTPResponse(res, "Precipitation created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Precipitation couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updatePrecipitation = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await precipitationModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Precipitation updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Precipitation couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deletePrecipitation = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await precipitationModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Precipitation couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getPrecipitation,
    getPrecipitationById,
    createPrecipitation,
    updatePrecipitation,
    deletePrecipitation
};