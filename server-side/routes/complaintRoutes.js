const express = require('express');
const router = express.Router();

const {
	createComplaint,
	getAllComplaint,
	deleteComplaint,
} = require('../controllers/complaint');

router.route('/create').post(createComplaint);
router.route('/get').get(getAllComplaint);
router.route('/delete/:id').delete(deleteComplaint);

module.exports = router;
