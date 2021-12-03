const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/StudentsController');

// api lấy ra thông tin về thể loại và nhà xuất bản, đường dẫn: /students/api/search?id=
router.get('/api/search', studentsController.apiSearch);

// api thêm sinh viên, đường dẫn: /students/api/add
router.post('/api/add', studentsController.apiAddStudent);

// api sửa sinh viên, đường dẫn: students/api/edit
router.put('/api/edit', studentsController.apiEditStudent);

// api xóa sinh viên, đường dẫn: student/api/delete
router.delete('/api/delete', studentsController.apiDeleteStudent);

// api hiển thị thông tin, đường dẫn lấy api bên frontend: `/students/api?MSSV=${MSSV truyền vào}`
router.get('/api', studentsController.AllStudents);

//vào trang thêm
router.get('/add', studentsController.add);

//lưu thông tin thêm
router.post('/post-add', studentsController.postAdd);

router.get('/edit', studentsController.edit);

router.post('/put-student', studentsController.putStudent);

router.get('/delete', studentsController.delete);

// router.get('/:slug', studentsController.show);

router.get('/', studentsController.index);

module.exports = router;
