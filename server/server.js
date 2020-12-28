const logger = require("./logger")
const express = require('express')


const startServer = (port) => {
    const app = express()
    app.listen(port, () => {
        logger.info(`Servidor rodando na portar ${port} - https://localhost:${port}`);
    })
}

module.exports = startServer;