const pinoOptions = {
    messageKey: "Description",
    prettyPrint: {
        colorize: true,
        levelFirst: true
    }
};

const logger = require('pino')(pinoOptions);

module.exports = logger;
