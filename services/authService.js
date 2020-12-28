const AuthResponse = require("../models/auth/authResponse")
const jwt = require("jsonwebtoken");

const authenticateUser = (login, password) => {
    if (login === "abc" && password === "123")
        return new AuthResponse(true, generateJWT(1));
    return new AuthResponse(false, "Login ou senha inválidos");
}


const generateJWT = (userId) => {
    return jwt.sign({ userId }, process.env.TOKEN_SECRET, { expiresIn: "1800s" })
}

module.exports = { authenticateUser };