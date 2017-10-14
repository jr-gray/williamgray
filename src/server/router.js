const router = require('express').Router();
const controller = require('./controller');

router.post('/contact', controller.sendEmail);

module.exports = router;