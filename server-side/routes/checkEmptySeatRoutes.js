const express = require('express');
const router = express.Router();

const{authenticateUser} = require('../middleware/authentication');

const {checkEmptySeat, seatRequest} = require('../controllers/checkEmptySeatController');

router.route('/checkEmptySeat').post(authenticateUser, checkEmptySeat);
router.route('/seatRequest').post(authenticateUser, seatRequest);

module.exports = router;