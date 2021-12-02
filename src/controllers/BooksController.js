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
        if(bookId) {
            let bookData = await booksServices.getBookInfoById(bookId);
            res.render('books/edit', {
                book: bookData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error')
        }
    };

    putBook = async (req, res) => {
        let data = req.body;
        let allBoooks = await booksServices.updateUser(data);

        return res.render('books', {
            dataTable: allBoooks,
        });
    }
    
    deleteBook = async (req, res) => {
        let id = req.query.id;
        if(id) {
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

    // api hiển thị -> giống tìm kiếm
    AllBooks = async (req, res) => {
        let id = req.query.id; // truyền vào all hoặc id

        if(!id) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào id',
                books: []
            })
        }

        let books = await apiBooksServices.getAllBooks(id);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            books
        })
    }
}

module.exports = new BooksController();

