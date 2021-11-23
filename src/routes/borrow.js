const express = require('express');
const router = express.Router();

const borrowController = require('../controllers/BorrowController');

router.get('/:slug', borrowController.show);

//vào trang thêm
router.get('/add',borrowController.add);

//lưu thông tin thêm
router.post('/post-add', borrowController.postAdd);

router.get('/', borrowController.index);

module.exports = router;
