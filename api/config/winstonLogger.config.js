//Import
const { createLogger, format, transports } = require("winston");
const { MESSAGE } = require("triple-beam");
const { combine, timestamp, label } = format;


const generalFormat = format((info) => {
    const { level, message, timestamp } = info;
    info[MESSAGE] = `LOG (${timestamp}) ${level}: ${message}`;
    return info;
});

//App logger
const appLogger = createLogger({
    format: combine(
        label({label: "APP", message: true}),
        timestamp(),
        generalFormat()
    ),
    transports: [
        new transports.Console()
    ]
});

//JWT Logger
const jwtLogger = createLogger({
    format: combine(
        label({ label: "JWT", message: true }),
        timestamp(),
        generalFormat()
    ),
    transports: [
        new transports.Console()
    ]
});

//Export
module.exports = {
    appLogger,
    jwtLogger
};
