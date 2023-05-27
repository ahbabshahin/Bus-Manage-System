const express = require('express');
const router = express.Router();

const { iAmIn } = require('../controllers/iAmIn');

router.post('/create', iAmIn);
// router.get('/get', getAllEntries);

module.exports = router;
