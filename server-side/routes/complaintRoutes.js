const express = require('express');
const router = express.Router();

const {
	createComplaint,
	getAllComplaint,
} = require('../controllers/complaint');

router.route('/create').post(createComplaint);
router.route('/get').get(getAllComplaint);

module.exports = router;
