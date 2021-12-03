const express = require('express');
const router = express.Router();

const booksController = require('../controllers/BooksController');

// router.get('/:slug', booksController.show);

// api lấy ra thông tin về thể loại và nhà xuất bản, đường dẫn: /books/api/search?id=
router.get('/api/search', booksController.apiSearch);

// api thêm sách, đường dẫn: /books/api/add
router.post('/api/add', booksController.apiAddBook);

// api sửa sách, đường dẫn: books/api/edit
router.put('/api/edit', booksController.apiEditBook);

// api xóa sách, đường dẫn: books/api/delete
router.delete('/api/delete', booksController.apiDeleteBook);

// api hiển thị thông tin, đường dẫn lấy api bên frontend: `/books/api?id=${id truyền vào}`
router.get('/api', booksController.AllBooks);

//vào trang thêm /books/add
router.get('/add', booksController.add);

//lưu thông tin thêm
router.post('/post-add', booksController.postAdd);

router.get('/edit', booksController.edit);

router.post('/put-book', booksController.putBook);

router.get('/delete', booksController.deleteBook);

router.get('/', booksController.index);

module.exports = router;
