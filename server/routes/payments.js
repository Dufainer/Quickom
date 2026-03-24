const router     = require('express').Router();
const controller = require('../controllers/paymentController');

router.post('/webhook', controller.webhook);
router.get('/order/:orderId', controller.getByOrder);

module.exports = router;
