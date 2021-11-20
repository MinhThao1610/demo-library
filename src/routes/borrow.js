const express = require('express');
const router = express.Router();

const borrowController = require('../controllers/BorrowController');

router.get('/:slug', borrowController.show);

router.get('/', borrowController.index);

module.exports = router;
