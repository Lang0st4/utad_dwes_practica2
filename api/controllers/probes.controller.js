//Import
const probesModel = require("../models/nosql/probes.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getProbes = async (req, res) => {
    try {
        const data = await probesModel.find();
        handleHTTPResponse(res, "Probes retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Probes couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getProbesByName = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await probesModel.findById(name);
        handleHTTPResponse(res, "Probes retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Probes couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createProbe = async (req, res) => {
    try {
        const body = req.body;
        const data = await probesModel.create(body);
        handleHTTPResponse(res, "Probes created successfully", data);
    }   
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Probes couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateProbe = async (req, res) => {
    try {
        const name = req.params.name;
        const body = req.body;
        const data = probesModel.findByIdAndUpdate(name, body);
        handleHTTPResponse(res, "Probes updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Probes couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteProbe = async (req, res) => {
    try {
        const name = req.params.name;
        const data = await probesModel.deleteOne({_id: name});
        handleHTTPResponse(res, "Probes deleted successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Probes couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
}

//Export
module.exports = {
    getProbes,
    getProbesByName,
    createProbe,
    updateProbe,
    deleteProbe
};