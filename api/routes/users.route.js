//Import
const express = require("express");

const {
    getUsers,
    getUsersByName,
    createUser,
    updateUser,
    deleteUser
} = require("../controllers/users.controller");
const { validatorRegister, validatorLogin } = require("../validators/auth.validator");
const { authMiddleware } = require("../middleware/session.middleware");
const router = express.Router();

//GET ALL
router.get("/", authMiddleware, getUsers);

//GET by ID (Login)
router.get("/:name", validatorLogin, getUsersByName);

//CREATE (Register)
router.post("/", validatorRegister, createUser);

//UPDATE
router.put("/:name", authMiddleware, updateUser);

//DELETE
router.delete("/:name", authMiddleware, deleteUser);

//Export
module.exports = router;