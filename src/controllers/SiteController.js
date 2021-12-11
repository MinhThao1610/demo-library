const loginServices = require('../services/loginServices');
const userServices = require('../services/apiUserServices');
const apiDifferentServices = require('../services/apiDifferentService');
const db = require('../models/index');

class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // cần sửa lại
    login(req, res) {
        res.render('login');
    }

    // đăng ký
    postLogin = async (req, res) => {
        // res.render('home');

        let message = await loginServices.createNewUser(req.body);
        console.log(message);
        // return res.send('post login from server');
        return res.render('home');
    };

    // tạo api login
    handleLogin = async (req, res) => {
        let username = req.body.username;
        let password = req.body.password;

        if (!username || !password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Thiếu thông số đầu vào!',
            });
        }

        let userData = await userServices.handleUserLogin(username, password);

        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {},
        });
    };

    // api đăng ký
    apiCreateUser = async (req, res) => {
        let message = await userServices.createNewUser(req.body);
        console.log(message);
        return res.status(200).json(message);
    };

    // api lấy thông tin thể loại
    apiCategory = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                category: [],
            });
        }

        let category = await apiDifferentServices.getAllCategorys(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            category,
        });
    };

    // api lấy thông tin nhà xuất bản
    apiPublisher = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                publisher: [],
            });
        }

        let publisher = await apiDifferentServices.getAllPublisher(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            publisher,
        });
    };

    // api lấy thông tin khoa
    apiFaculty = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                faculty: [],
            });
        }

        let faculty = await apiDifferentServices.getAllFaculty(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            faculty,
        });
    };

    // api lấy thông tin lớp
    apiClass = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                Class: [],
            });
        }

        let Class = await apiDifferentServices.getAllClass(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            Class,
        });
    };
}

module.exports = new SiteController();
