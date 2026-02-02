//Import
const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator.util");

//Validates req parameters

//Register
const validatorRegister = [
    check("username").exists().notEmpty().isLength({min: 3, max: 99}),
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 8, max: 30}),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

//Login
const validatorLogin = [
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({min: 8, max: 30}),

    (req, res, next) => {
        return validateResults(req, res, next);
    }
];

//Export
module.exports = {
    validatorRegister,
    validatorLogin
}