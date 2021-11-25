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
        res.render('borrow/add');
    };

    postAdd = async (req, res) => {
        // res.render('home');

        let message = await borrowServices.createNewUser(req.body);
        console.log(message);
        return res.render('borrow', {
            dataTable:message,
        });
    };

    edit = async (req, res) => {
        let borrowId = req.query.id;
        if(borrowId) {
            let borrowData = await borrowServices.getBorrowInfoById(borrowId);
            res.render('borrow/edit', {
                borrow: borrowData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error')
        }
    };

    putBorrow = async (req, res) => {
        let data = req.body;
        let allBorrows = await borrowServices.updateUser(data);

        return res.render('borrow', {
            dataTable: allBorrows,
        });
    }
    
    delete = async (req, res) => {
        let id = req.query.id;
        if(id) {
            await borrowServices.deleteBorrowById(id);
            let data = await borrowServices.getAllUser();
            console.log(data);
            return res.render('borrow', {
                dataTable: data,
            });
        } else {
            return res.send('error');
        }
    };
}

module.exports = new BorrowController();
