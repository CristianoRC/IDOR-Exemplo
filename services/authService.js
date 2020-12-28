const AuthResponse = require("../models/auth/authResponse")
const jwt = require("jsonwebtoken");
const logger = require("../server/logger")

const authenticateUser = (login, password) => {
    if (login === "abc" && password === "123")
        return new AuthResponse(true, generateJWT(1));
    return new AuthResponse(false, "Login ou senha inválidos");
}


const generateJWT = (userId) => {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: "1800s" })
}

const tokenIsValid = (token) => {
    try {
        jwt.verify(token, process.env.TOKEN_SECRET)
        return true;
    } catch (error) {
        if (error.name !== jwt.JsonWebTokenError.name && error.name !== jwt.TokenExpiredError.name)
            logger.error(error);

        return false;
    }
}

module.exports = { authenticateUser, tokenIsValid };