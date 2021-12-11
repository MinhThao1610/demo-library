// để các trang chỉ có 1 mình mà k có tài nguyên khác
const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

// api login
router.post('/api/login', siteController.handleLogin);

// api đăng ký, đường dẫn: /api/createUser
router.post('/api/createUser', siteController.apiCreateUser);

// api lấy ra thông tin về thể loại, đường dẫn: /api/category?id=
router.get('/api/category', siteController.apiCategory);

// api lấy ra thông tin về nhà xuất bản, đường dẫn: /api/publisher?id=
router.get('/api/publisher', siteController.apiPublisher);

// api lấy ra thông tin về lớp, đường dẫn: /api/class?id=
router.get('/api/class', siteController.apiClass);

// api lấy ra thông tin về khoa, đường dẫn: /api/faculty?id=
router.get('/api/faculty', siteController.apiFaculty);

router.get('/login', siteController.login);

// đăng ký
router.post('/post-login', siteController.postLogin);

// Trang chủ
router.get('/', siteController.index);

module.exports = router;
