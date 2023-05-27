const express = require('express');
const router = express.Router();

const { getDashboardInfo } = require('../controllers/dashboardController');

router.route('/get').get(getDashboardInfo);

module.exports = router;
