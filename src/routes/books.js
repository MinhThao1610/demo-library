const express = require('express');
const router = express.Router();

const booksController = require('../controllers/BooksController');

// router.get('/:slug', booksController.show);

//vào trang thêm /books/add
router.get('/add', booksController.add);

//lưu thông tin thêm
router.post('/post-add', booksController.postAdd);

router.get('/:id/edit', booksController.edit);

router.get('/:id/detele', booksController.delete);

router.get('/', booksController.index);

module.exports = router;
