const express = require('express');
const router = express.Router();

const booksController = require('../controllers/BooksController');

// router.get('/:slug', booksController.show);

//vào trang thêm /books/add
router.get('/add', booksController.add);

//lưu thông tin thêm
router.post('/post-add', booksController.postAdd);

router.get('/edit', booksController.edit);

router.post('/put-book', booksController.putBook);

router.get('/delete', booksController.deleteBook);

router.get('/', booksController.index);

module.exports = router;
