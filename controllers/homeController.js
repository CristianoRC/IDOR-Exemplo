const express = require('express');
const router = express.Router();
const { StatusCodes } = require("http-status-codes")
const { version } = require("../package.json");

router.get("/", (request, response) => {
    response.status(StatusCodes.OK).send({ version });
});


module.exports = router;