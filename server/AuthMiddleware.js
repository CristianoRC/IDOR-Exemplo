const { StatusCodes } = require("http-status-codes")
const authService = require("../services/authService")

const authMiddleware = (request, response, next) => {
    response.status(StatusCodes.UNAUTHORIZED).send();
    next();
}

module.exports = authMiddleware;