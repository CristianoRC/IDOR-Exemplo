const pinoExpress = require('express-pino-logger')()
const express = require('express')
const bodyParser = require('body-parser')
const logger = require("./logger")
const homeController = require("../controllers/homeController")
const authController = require("../controllers/authController")
const configureEnvironmentVariables = () => {
    const dotenv = require("dotenv");
    dotenv.config();

}

const startServer = (port) => {
    configureEnvironmentVariables();
    const app = express();
    app.use(bodyParser.json())
    app.use(pinoExpress);

    app.use(authController);
    app.use(homeController);

    app.listen(port, () => {
        logger.info(`Servidor rodando na portar ${port} - http://localhost:${port}/`);
    })
}


module.exports = startServer;