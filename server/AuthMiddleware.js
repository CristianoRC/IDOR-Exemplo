const authService = require("../services/authService")

const authMiddleware = (request, response, next) => {
    
    next();
}

module.exports = authMiddleware;