const db = require('../models/index');

// API hiển thị
let getAllBooks = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = '';
            if(bookId == 'ALL') {
                books = await db.books.findAll({
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                });

            } 
            if(bookId && bookId !== 'ALL') {
                books = await db.books.findOne({
                    where: {id: bookId}
                })
            }
            resolve(books);

        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getAllBooks: getAllBooks,
}