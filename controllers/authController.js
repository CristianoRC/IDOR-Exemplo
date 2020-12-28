const express = require('express');
const router = express.Router();
const authServer = require("../services/authService");

router.post("/auth", (request, response) => {
    const { login, password } = request.body;
    const responseLogin = authServer.authenticateUser(login, password);
    
    if (responseLogin.tokenGenerated)
        response.status(200).send({ token: responseLogin.response })
    else
        response.status(400).send({ error: responseLogin.response });
})

module.exports = router;