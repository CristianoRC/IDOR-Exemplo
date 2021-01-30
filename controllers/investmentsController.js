const express = require('express');
const router = express.Router();

const { StatusCodes } = require("http-status-codes")
const authMiddleware = require("../server/middlewares/AuthMiddleware")
const { getInvestimens } = require("../services/investmentService")

router.get("/investment/:id", authMiddleware, (request, response) => {
    const userId = request.params.id;
    const investmentsResult = getInvestimens(userId);

    console.log(investmentsResult);
    if (investmentsResult === undefined)
        return response.status(StatusCodes.NO_CONTENT).send();

    return response.status(StatusCodes.OK).json(investmentsResult)
})

module.exports = router;