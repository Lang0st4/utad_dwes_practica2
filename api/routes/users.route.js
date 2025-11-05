//Import
const express = require("express");

const {
    getUsers,
    getUsersByName,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");
const router = express.router();

//GET ALL
router.get("/", getUsers);

//GET by ID
router.get("/:name", getUsersByName);

//CREATE
router.post("/", createUser);

//UPDATE
router.put("/:name", updateUser);

//DELETE
router.delete("/:name", deleteUser);

//Export
module.exports = router;