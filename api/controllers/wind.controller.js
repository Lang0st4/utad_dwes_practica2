//Import
const windModel = require("../models/nosql/wind.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getWind = async (req, res) => {
    try {
        const data = await windModel.find();
        handleHTTPResponse(res, "Wind retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Wind couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getWindById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await windModel.findById(id);
        handleHTTPResponse(res, "Wind retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Wind couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createWind = async (req, res) => {
    try {
        const body = req.body;
        const data = await windModel.create(body);
        handleHTTPResponse(res, "Wind created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Wind couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateWind = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await windModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Wind updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Wind couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteWind = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await windModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Wind couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getWind,
    getWindById,
    createWind,
    updateWind,
    deleteWind
};