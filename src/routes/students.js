const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController');

//vào trang thêm
router.get('/add', studentsController.add);

//lưu thông tin thêm
router.post('/post-add', studentsController.postAdd);

router.get('/edit', studentsController.edit);

router.post('/put-student', studentsController.putStudent);

router.get('/delete', studentsController.delete);

// api thêm sinh viên, đường dẫn: /students/api/add
router.post('/api/add', studentsController.apiAddStudent);

// api hiển thị thông tin, đường dẫn lấy api bên frontend: `/students/api?MSSV=${MSSV truyền vào}`
router.get('/api', studentsController.AllStudents);

// router.get('/:slug', studentsController.show);

router.get('/', studentsController.index);

module.exports = router;
