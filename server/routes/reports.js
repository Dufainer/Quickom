const router     = require('express').Router();
const controller = require('../controllers/reportController');

router.get('/sales',    controller.sales);
router.get('/products', controller.products);
router.get('/summary',  controller.summary);

module.exports = router;
