const db = require('../models/index');
const booksServices = require('../services/booksServices');
const apiBooksServices = require('../services/apiBooksServices');

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
    // show = (req, res) => {
    //     res.send('Books detail!!!');
    // };

    add = (req, res) => {
        res.render('books/add');
    };

    postAdd = async (req, res) => {
        let message = await booksServices.createNewUser(req.body);
        console.log(message);
        return res.render('books', {
            dataTable: message,
        });
    };

    edit = async (req, res) => {
        let bookId = req.query.id;
        if (bookId) {
            let bookData = await booksServices.getBookInfoById(bookId);
            res.render('books/edit', {
                book: bookData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error');
        }
    };

    putBook = async (req, res) => {
        let data = req.body;
        let allBoooks = await booksServices.updateUser(data);

        return res.render('books', {
            dataTable: allBoooks,
        });
    };

    deleteBook = async (req, res) => {
        let id = req.query.id;
        if (id) {
            await booksServices.deleteBookById(id);
            let data = await booksServices.getAllUser();
            console.log(data);
            return res.render('books', {
                dataTable: data,
            });
            // return res.render('books');
        } else {
            return res.send('error');
        }
    };

    // api hi???n th???
    AllBooks = async (req, res) => {
        let id = req.query.id; // truy???n v??o all ho???c id
        let name = req.query.name;
        let category = req.query.category;
        let publisher = req.query.publisher;

        if (!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Ch??a truy???n v??o id',
                books: [],
            });
        }

        let books = await apiBooksServices.getAllBooks(id);

        let search = {};
        if (name || category || publisher) {
            search = await apiBooksServices.searchBook(
                name,
                category,
                publisher,
            );
        }

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            books,
            search,
        });
    };

    // api th??m
    apiAddBook = async (req, res) => {
        let message = await apiBooksServices.addNewBook(req.body);
        console.log(message);
        return res.status(200).json(message);
    };

    // api x??a
    apiDeleteBook = async (req, res) => {
        if (!req.query.id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Thi???u th??ng s??? b???t bu???c',
            });
        }
        let message = await apiBooksServices.deleteBook(req.query.id);
        return res.status(200).json(message);
    };

    // api s???a
    apiEditBook = async (req, res) => {
        let data = req.body;
        let message = await apiBooksServices.updateBook(data);
        return res.status(200).json(message);
    };
}

module.exports = new BooksController();
