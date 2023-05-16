const express = require('express');
const router = express.Router();

const {iAmIn} = require('../controllers/iAmIn');

router.post('/create', iAmIn);

module.exports = router;