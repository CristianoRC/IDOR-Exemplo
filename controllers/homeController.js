const express = require('express');
const router = express.Router();
const { version } = require("../package.json");

router.get("/", (request, response) => {
    response.status(200).send({ version });
});


module.exports = router;