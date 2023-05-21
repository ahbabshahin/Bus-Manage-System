const express = require('express');
const router = express.Router();

const { getBusRoutine } = require('../controllers/busRoutine');

router.route('/getBusRoutine').get(getBusRoutine);

module.exports = router;
