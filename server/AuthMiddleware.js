const { StatusCodes } = require("http-status-codes")
const { tokenIsValid } = require("../services/authService")

const authMiddleware = (request, response, next) => {
    const authHeader = request.headers["authorization"];
    const token = authHeader?.split(' ')[1] ?? null;

    if (tokenIsValid(token) === true)
        next();
    else
        response.status(StatusCodes.UNAUTHORIZED).send();

}

module.exports = authMiddleware;