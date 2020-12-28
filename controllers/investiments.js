const router = express.Router();
const express = require('express');
const authMiddleware = require("../server/AuthMiddleware")


router.post("/investiment", authMiddleware, (request, response) => {
    
    response.status(200).send();
})

module.exports = router;