const db = require('../models/index');

// API hiển thị
let getAllBooks = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = '';
            if (bookId == 'ALL') {
                books = await db.books.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                });
            }
            if (bookId && bookId !== 'ALL') {
                books = await db.books.findOne({
                    where: { id: bookId },
                });
            }
            resolve(books);
        } catch (error) {
            reject(error);
        }
    });
};

let checkBookName = (bookName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.books.findOne({
                where: { name: bookName },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let checkBookCategory = (bookCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.books.findOne({
                where: { category: bookCategory },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

let checkBookPublisher = (bookPublisher) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.books.findOne({
                where: { publisher: bookPublisher },
            });
            if (user) {
                resolve(true);
            } else {
                resolve(false);
            }
        } catch (error) {
            reject(error);
        }
    });
};

// api thêm sách
let addNewBook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check name
            let checkName = await checkBookName(data.name);
            let checkCategory = await checkBookCategory(data.category);
            let checkPublisher = await checkBookPublisher(data.publisher);
            if (
                checkName == true &&
                checkCategory == true &&
                checkPublisher == true
            ) {
                resolve({
                    errCode: 1,
                    message: 'Sách đã tồn tại!',
                });
            } else {
                await db.books.create({
                    name: data.name,
                    category: data.category,
                    publisher: data.publisher,
                    total_amount: data.total_amount,
                    current_number: data.current_number,
                    total_lost: data.total_lost,
                });
            }
            let allBoooks = await db.books.findAll({
                raw: true,
            });
            resolve(allBoooks);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllBooks: getAllBooks,
    addNewBook: addNewBook,
};
