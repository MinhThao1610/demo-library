const express = require('express');
const router = express.Router();

const borrowController = require('../controllers/BorrowController');

// router.get('/:slug', borrowController.show);

//vào trang thêm
router.get('/add', borrowController.add);

//lưu thông tin thêm
router.post('/post-add', borrowController.postAdd);

router.get('/edit', borrowController.edit);

router.post('/put-borrow', borrowController.putBorrow);

router.get('/delete', borrowController.delete);

// api thêm phiên mượn sách, đường dẫn: /borrow/api/add
router.post('/api/add', borrowController.apiAddBorrow);

// api hiển thị thông tin, đường dẫn lấy api bên frontend: `/borrow/api?id=${id truyền vào}`
router.get('/api', borrowController.AllBorrow);

router.get('/', borrowController.index);

module.exports = router;
