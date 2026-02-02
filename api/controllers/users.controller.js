//Import
const { matchedData } = require("express-validator");
const { usersModel } = require("../models/nosql/users.model");
const { handleHTTPResponse, handleHTTPError, INTERNAL_SERVER_ERROR, NOT_FOUND, UNAUTHORIZED } = require("../utils/handleResponse.util");
const { hashPassword, comparePassword } = require("../utils/handlePassword.util");
const { tokenSign } = require("../utils/handleJWT.util");

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

//GET by ID (Login)
const getUsersByName = async (req, res) => {
    try {
        req = matchedData(req);

        const user = await usersModel.findOne({ email: req.email }).select("password username role email");

        if(!user) {
            handleHTTPError(res, "Invalid credentials", NOT_FOUND);
            return;
        }

        const check = await comparePassword(req.password, user.password);
        if(!check) {
            handleHTTPError(res, "Invalid credentials", UNAUTHORIZED);
            return;
        }

        user.set("password", undefined, { strict: false });
        const data = {
            token: await tokenSign(user),
            user
        }
        handleHTTPResponse(res, "Authentication success", data);
    }
    catch(err) {
        console.log(`Error: ${err}`);
        handleHTTPError(res, "Advanced couldn't be retrieved", INTERNAL_SERVER_ERROR);
    }
};

//CREATE (Register)
const createUser = async (req, res) => {
    try {
        req = matchedData(req);

        const hashedPassword = await hashPassword(req.password);
        const body = { ...req, password: hashedPassword};
        const dataUser = await usersModel.create(body);
        dataUser.set("password", undefined, { strict: false });

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        };
        handleHTTPResponse(res, "User signed up successfully", data);
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