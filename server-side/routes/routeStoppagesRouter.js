const express = require('express');
const router = express.Router();

const { createRouteStoppages, updateRouteStoppages, getRouteStoppages, getSingleStoppages, deleteRouteStoppages } = require('../controllers/routeStoppagesController');

router.route('/get').get(getRouteStoppages);
router.route('/create').post(createRouteStoppages);

router.route('/get/:id').get(getSingleStoppages);
router.route('/:id').post(updateRouteStoppages).delete(deleteRouteStoppages);

module.exports = router;