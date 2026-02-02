//Import
const { handleHTTPError, FORBIDDEN, INTERNAL_SERVER_ERROR } = require("../utils/handleResponse.util");

const checkRole = (roles) => (req, res, next) => {
    try {
        const { user } = req;
        const userRole = user.role;

        const checkValueRole = roles.includes(userRole);
        if(!checkValueRole) {
            handleHTTPError(res, "Not allowed", FORBIDDEN);
            return;
        }

        next();
    }
    catch(err) {
        console.log("ERROR [role.middleware / checkRole]:\n" + err);
        handleHTTPError(res, "Error permissions", INTERNAL_SERVER_ERROR);
    }
}

//Export
module.exports = {
    checkRole
};
