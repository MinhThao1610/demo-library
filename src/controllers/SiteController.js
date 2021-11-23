const loginServices = require('../services/loginServices');
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
        return res.send('post login from server');
    };
}

module.exports = new SiteController();
