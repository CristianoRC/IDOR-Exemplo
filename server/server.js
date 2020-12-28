const logger = require("./logger")
const pinoExpress = require('express-pino-logger')()
const express = require('express')
const homeController = require("../controllers/homeController")


const startServer = (port) => {
    const app = express();
    app.use(pinoExpress);
    app.use(homeController);
    app.listen(port, () => {
        logger.info(`Servidor rodando na portar ${port} - http://localhost:${port}/`);
    })
}

module.exports = startServer;