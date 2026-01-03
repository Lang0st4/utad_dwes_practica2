//Import
const infoModel = require("../models/nosql/info.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getInfo = async (req, res) => {
    try {
        const data = await infoModel.find()
        handleHTTPResponse(res, "Info retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Info couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getInfoById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await infoModel.findById(id);
        handleHTTPResponse(res, "Advanced retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Info couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createInfo = async (req, res) => {
    try {
        const body = req.body;
        const data = await infoModel.create(body);
        handleHTTPResponse(res, "Advanced created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Info couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await infoModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Advanced updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Info couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteInfo = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await infoModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Info couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getInfo,
    getInfoById,
    createInfo,
    updateInfo,
    deleteInfo
};