// để các trang chỉ có 1 mình mà k có tài nguyên khác
const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

// api login
router.post('/api/login', siteController.handleLogin);

// api đăng ký, đường dẫn: /api/createUser
router.post('/api/createUser', siteController.apiCreateUser);

router.get('/login', siteController.login);

// đăng ký
router.post('/post-login', siteController.postLogin);

// Trang chủ
router.get('/', siteController.index);

module.exports = router;
