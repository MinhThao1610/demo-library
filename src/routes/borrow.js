const express = require('express');
const router = express.Router();

const borrowController = require('../controllers/BorrowController');

// router.get('/:slug', borrowController.show);

// api thêm phiên mượn sách, đường dẫn: /borrow/api/add
router.post('/api/add', borrowController.apiAddBorrow);

// api sửa phiên mượn sách, đường dẫn: borrow/api/edit
router.put('/api/edit', borrowController.apiEditBorrow);

// api xóa phiên mượn sách, đường dẫn: borrow/api/delete
router.delete('/api/delete', borrowController.apiDeleteBorrow);

// api hiển thị thông tin, đường dẫn lấy api bên frontend: `/borrow/api?id=${id truyền vào}`
router.get('/api', borrowController.AllBorrow);

//vào trang thêm
router.get('/add', borrowController.add);

//lưu thông tin thêm
router.post('/post-add', borrowController.postAdd);

router.get('/edit', borrowController.edit);

router.post('/put-borrow', borrowController.putBorrow);

router.get('/delete', borrowController.delete);

router.get('/', borrowController.index);

module.exports = router;
