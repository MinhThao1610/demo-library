const loginServices = require('../services/loginServices');
const userServices = require('../services/userServices');
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

        if(!username || !password) {
            return res.status(500).json({
                errCode: 1,
                message: 'Thiếu thông số đầu vào!'
            })
        }

        let userData = await userServices.handleUserLogin(username, password);

        
        return res.status(200).json({
            errCode: userData.errCode,
            message: userData.errMessage,
            user: userData.user ? userData.user : {}
        })
    }
}

module.exports = new SiteController();
