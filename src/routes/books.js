const express = require('express');
const router = express.Router();

const booksController = require('../controllers/BooksController');

router.get('/:slug', booksController.show);

router.get('/', booksController.index);

module.exports = router;
