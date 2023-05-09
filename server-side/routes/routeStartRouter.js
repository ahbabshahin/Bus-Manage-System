const express = require('express');
const { getAllBuses } = require('../controllers/busController');
const router = express.Router();

const { createRoute, updateRoute, getAllRoutes, getSingleRoute, deleteRoute } = require('../controllers/routeStartController');

router.getAllRoutes('/get', getAllBuses);
router.route('/get/:id').get(getSingleRoute);
router.route('/update/:id').put(updateRoute);
router.route('/delete/:id').delete(deleteRoute);
router.post('/create', createRoute);

module.exports = router;