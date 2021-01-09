const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.get('/', controller.index)
router.get('/checkout', controller.checkout);
router.get('/change/:id', controller.add);

module.exports = router;