//Import
const advancedModel = require("../models/nosql/advanced.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getAdvanced = async (req, res) => {
    try {
        const data = await advancedModel.find()
        handleHTTPResponse(res, "Advanced retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getAdvancedById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await advancedModel.findById(id);
        handleHTTPResponse(res, "Advanced retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createAdvanced = async (req, res) => {
    try {
        const body = req.body;
        const data = await advancedModel.create(body);
        handleHTTPResponse(res, "Advanced created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateAdvanced = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await advancedModel.findByIdAndUpdate(id, body);
        handleHTTPResponse(res, "Advanced updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteAdvanced = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await advancedModel.deleteOne({_id: id});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getAdvanced,
    getAdvancedById,
    createAdvanced,
    updateAdvanced,
    deleteAdvanced
};