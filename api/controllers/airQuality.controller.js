//Import
const airQualityModel = require("../models/nosql/airQuality.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getAirQuality = async (req, res) => {
    try {
        const data = await airQualityModel.find()
        handleHTTPResponse(res, "Air retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Air couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getAirQualityById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await airQualityModel.findById(id);
        handleHTTPResponse(res, "Air retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Air couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createAirQuality = async (req, res) => {
    try {
        const body = req.body;
        const data = await airQualityModel.create(body);
        handleHTTPResponse(res, "Air created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Air couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateAirQuality = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await airQualityModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Air updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Air couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteAirQuality = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await airQualityModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Air couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getAirQuality,
    getAirQualityById,
    createAirQuality,
    updateAirQuality,
    deleteAirQuality
};