//Import
const { handleHTTPError, UNAUTHORIZED } = require("../utils/handleResponse.util");
const { verifyToken } = require("../utils/handleJWT.util");
const { usersModel } = require("../models");

/* Obtains the req token and validates it
If it passes inserts the user instead of the token payload */ 


const authMiddleware = async (req, res, next) => {
    try {
        if(!req.headers.authorization) {
            handleHTTPError(res, "Not token", UNAUTHORIZED);
            return;
        }

        const token = req.headers.authorization.split(' ').pop();

        const tokenPayload = verifyToken(token);
        if(!tokenPayload) {
            handleHTTPError(res, "Not payload data");
            return;
        }

        const query = {
            _id: tokenPayload._id
        }
        const user = await usersModel.findOne(query);
        req.user = user;

        next();
    }
    catch(err) {
        console.log("ERROR [session.middleware / authMiddleware]:\n" + err);
        handleHTTPError(res, "Not session", UNAUTHORIZED);
    }
};

//Export
module.exports = {
    authMiddleware
}
