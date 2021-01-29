const express = require('express');
const router = express.Router();

const { StatusCodes } = require("http-status-codes")
const authMiddleware = require("../server/middlewares/AuthMiddleware")
const { getInvestimens } = require("../services/investimentService")

router.get("/investiment/:id", authMiddleware, (request, response) => {
    const userId = request.params.id;
    const investiments = getInvestimens(userId);

    if (investiments === undefined)
        return response.status(StatusCodes.NO_CONTENT).send();

    return response.status(StatusCodes.OK).json(investiments)
})

module.exports = router;