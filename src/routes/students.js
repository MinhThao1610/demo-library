const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController');

router.get('/:slug', studentsController.show);

//vào trang thêm
router.get('/add', studentsController.add);

//lưu thông tin thêm
router.post('/post-add', studentsController.postAdd);

router.get('/', studentsController.index);

module.exports = router;
