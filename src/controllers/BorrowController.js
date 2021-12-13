const db = require('../models/index');
const borrowServices = require('../services/borrowServices');
const apiBorrowServices = require('../services/apiBorrowServices');
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
            dataTable: message,
        });
    };

    edit = async (req, res) => {
        let borrowId = req.query.id;
        if (borrowId) {
            let borrowData = await borrowServices.getBorrowInfoById(borrowId);
            res.render('borrow/edit', {
                borrow: borrowData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error');
        }
    };

    putBorrow = async (req, res) => {
        let data = req.body;
        let allBorrows = await borrowServices.updateUser(data);

        return res.render('borrow', {
            dataTable: allBorrows,
        });
    };

    delete = async (req, res) => {
        let id = req.query.id;
        if (id) {
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

    // api hiển thị
    AllBorrow = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                borrow: [],
            });
        }

        let borrow = await apiBorrowServices.getAllBorrow(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            borrow,
        });
    };

    // api thêm
    apiAddBorrow = async (req, res) => {
        let message = await apiBorrowServices.addNewBorrow(req.body);
        console.log(message);
        return res.status(200).json(message);
    };

    // api xóa
    apiDeleteBorrow = async (req, res) => {
        if (!req.query.id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Thiếu thông số bắt buộc',
            });
        }
        let message = await apiBorrowServices.deleteBorrow(req.query.id);
        return res.status(200).json(message);
    };

    // api sửa
    apiEditBorrow = async (req, res) => {
        let data = req.body;
        let message = await apiBorrowServices.updateBorrow(data);
        return res.status(200).json(message);
    };

    // api search
    apiSearch = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                books: [],
            });
        }

        let books = await apiBorrowServices.searchBorrow(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            books,
        });
    };
}

module.exports = new BorrowController();
