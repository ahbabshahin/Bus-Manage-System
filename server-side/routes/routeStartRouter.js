const express = require('express');
const router = express.Router();

const {
	createRoute,
	updateRoute,
	getAllRoutes,
	getSingleRoute,
	deleteRoute,
	deleteAllRoutes,
} = require('../controllers/routeStartController');

router.get('/get', getAllRoutes);
router.route('/get/:id').get(getSingleRoute);
router.route('/update/:id').post(updateRoute);
router.route('/delete/:id').delete(deleteRoute);
router.post('/create', createRoute);
router.post('/deleteAllRoutes', deleteAllRoutes);

module.exports = router;
