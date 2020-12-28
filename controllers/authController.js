const express = require('express');
const { StatusCodes } = require("http-status-codes")
const router = express.Router();
const authServer = require("../services/authService");

router.post("/auth", (request, response) => {
    const { login, password } = request.body;
    const responseLogin = authServer.authenticateUser(login, password);

    if (responseLogin.tokenGenerated)
        response.status(StatusCodes.OK).send({ token: responseLogin.response })
    else
        response.status(StatusCodes.BAD_REQUEST).send({ error: responseLogin.response });
})

module.exports = router;