const db = require('../models/index');
const borrowServices = require('../services/borrowServices');

class BorrowController {
    // [GET] /borrow
    index = async (req, res) => {
        let data = await borrowServices.getAllUser();
        console.log(data);
        return res.render('borrow', {
            dataTable: data,
        });
    };

    // [GET] /borrow/:slug
    show(req, res) {
        res.send('borrow books detail!!!');
    }

    add = (req, res) => {
        res.render('add');
    };

    postAdd = async (req, res) => {
        // res.render('home');

        let message = await borrowServices.createNewUser(req.body);
        console.log(message);
        return res.render('borrow');
    };
}

module.exports = new BorrowController();
