//Import
const usersModel = require("../models/nosql/users.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

//GET ALL
const getUsers = async (req, res) => {
    try {
        const data = await usersModel.find();
        handleHTTPResponse(res, "Users retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//GET by ID
const getUsersByName = async (req, res) => {
    try {
        const username = req.params.username;
        const data = await usersModel.findById(username);
        handleHTTPResponse(res, "Users retrieved successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE
const createUser = async (req, res) => {
    try {
        const body = req.body;
        const data = await usersModel.create(body);
        handleHTTPResponse(res, "Users created successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be created", INTERNAL_SERVER_ERROR);
    }
};

//UPDATE
const updateUser = async (req, res) => {
    try {
        const username = req.params.username;
        const body = req.body;
        const data = await usersModel.findByIdAndUpdate(username, body);
        handleHTTPResponse(res, "Users updated successfully", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be updated", INTERNAL_SERVER_ERROR);
    }
};

//DELETE
const deleteUser = async (req, res) => {
    try {
        const username = req.params.username;
        const data = await usersModel.deleteOne({_id: username});
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be deleted", INTERNAL_SERVER_ERROR);
    }
};

//Export
module.exports = {
    getUsers,
    getUsersByName,
    createUser,
    updateUser,
    deleteUser
};