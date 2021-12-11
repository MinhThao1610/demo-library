const { sequelize } = require('../models/index');
const db = require('../models/index');

// API hiển thị
let getAllBooks = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let books = '';
            if (bookId == 'ALL') {
                books = await sequelize.query(
                    'SELECT b.id, b.name, c.name as category, p.name as publisher, b.total_amount, b.current_number, b.total_lost, b.createdAt, b.updatedAt FROM books b JOIN category c ON b.category = c.id JOIN publisher p ON b.publisher = p.id',
                    {
                        type: db.SELECT,
                    },
                );
                // books = await db.books.findAll({
                //     attributes: { exclude: ['createdAt', 'updatedAt'] },
                // });
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
                if (checkCategory == false) {
                    await db.category.create({
                        name: data.category,
                    });
                }

                if (checkPublisher == false) {
                    await db.publisher.create({
                        name: data.publisher,
                    });
                }

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

// xóa
let deleteBook = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: { id: bookId },
            });
            if (!book) {
                resolve({
                    errCode: 2,
                    errMessage: 'Không tồn tại',
                });
            }
            await db.books.destroy({
                where: { id: bookId },
            });
            resolve({
                errCode: 0,
                errMessage: 'Đã xóa sách',
            });
        } catch (error) {
            reject(error);
        }
    });
};

// sửa
let updateBook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Thiếu thông số đầu vào',
                });
            }

            let book = await db.books.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (book) {
                book.name = data.name;
                book.category = data.category;
                book.publisher = data.publisher;
                book.total_amount = data.total_amount;
                book.current_number = data.current_number;
                book.total_lost = data.total_lost;

                await book.save();
                resolve({
                    errCode: 0,
                    message: 'Cập nhật thành công!',
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: 'Không tồn tại',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllBooks: getAllBooks,
    addNewBook: addNewBook,
    deleteBook: deleteBook,
    updateBook: updateBook,
};
