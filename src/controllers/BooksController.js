const db = require('../models/index');
const booksServices = require('../services/booksServices');

class BooksController {
    // [GET] /books
    index = async (req, res) => {
        let data = await booksServices.getAllUser();
        console.log(data);
        return res.render('books', {
            dataTable: data,
        });

        // try {

        //     let data = await db.books.findAll();
        //     return res.render('books', {
        //         data: JSON.stringify(data)
        //     });
        // } catch(err) {

        //     console.log('error');
        // }

        //    res.render('books');
    };

    // [GET] /books/:slug
    show = (req, res) => {
        res.send('Books detail!!!');
    };

    add = (req, res) => {
        res.render('add');
    };

    postAdd = async (req, res) => {
        let message = await booksServices.createNewUser(req.body);
        console.log(message);
        return res.render('books');
    };

    edit = (req, res) => {
        res.render('books/edit');
    };

    delete = (req, res) => {
        res.render('books/delete');
    };
}

module.exports = new BooksController();
