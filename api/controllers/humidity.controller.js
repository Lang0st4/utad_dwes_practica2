//Import
const humidityModel = require("../models/nosql/humidity.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getHumidity = async (req, res) => {
    try {
        const data = await humidityModel.find()
        handleHTTPResponse(res, "Humidity retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Humidity couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getHumidityById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await humidityModel.findById(id);
        handleHTTPResponse(res, "Humidity retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Humidity couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createHumidity = async (req, res) => {
    try {
        const body = req.body;
        const data = await humidityModel.create(body);
        handleHTTPResponse(res, "Humidity created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Humidity couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateHumidity = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await humidityModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Humidity updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Humidity couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteHumidity = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await humidityModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Humidity couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getHumidity,
    getHumidityById,
    createHumidity,
    updateHumidity,
    deleteHumidity
};