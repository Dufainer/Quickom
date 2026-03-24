const router     = require('express').Router();
const controller = require('../controllers/ticketController');

router.get('/',      controller.getAll);
router.get('/:id',   controller.getById);
router.patch('/:id', controller.updateStatus);

module.exports = router;
