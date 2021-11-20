const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController');

router.get('/:slug', studentsController.show);

router.get('/', studentsController.index);

module.exports = router;
