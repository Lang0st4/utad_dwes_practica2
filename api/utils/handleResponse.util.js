const BAD_REQUEST = 400;
const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const handleHTTPResponse = (res, message, content = {}) => {
    res.send({
        "ERROR": false,
        "MESSAGE": message,
        "CONTENT": content
    });
};

const handleHTTPError = (res, message, code = BAD_REQUEST) => {
    res.status(code).send({
        "ERROR": true,
        "MESSAGE": message
    });
};

//Exports
module.exports = {
    BAD_REQUEST,
    UNAUTHORIZED,
    FORBIDDEN,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR,
    handleHTTPResponse,
    handleHTTPError
};