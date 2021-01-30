const express = require('express');
const router = express.Router();

const { StatusCodes } = require("http-status-codes")
const authMiddleware = require("../server/middlewares/AuthMiddleware")
const { getInvestimens } = require("../services/investmentService")

router.get("/investment/:id", authMiddleware, (request, response) => {
    const userId = request.params.id;
    const investments = getInvestimens(userId);

    if (investments === undefined)
        return response.status(StatusCodes.NO_CONTENT).send();

    return response.status(StatusCodes.OK).json(investments)
})

module.exports = router;