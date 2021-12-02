const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

// Thêm
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.books.create({
                name: data.name,
                category: data.category,
                publisher: data.publisher,
                total_amount: data.total_amount,
                current_number: data.current_number,
                total_lost: data.total_lost,
            });
            let allBoooks = await db.books.findAll({
                raw: true,
            });
            resolve(allBoooks);
        } catch (error) {
            reject(error);
        }
    });
};

// hiển thị
let getAllUser = () => {
    // hàm Promise() để code thực thi trong hàm ròi mới chạy cái khác
    return new Promise(async (resolve, reject) => {
        try {
            let users = db.books.findAll({
                raw: true,
            });
            resolve(users);
            
        } catch (error) {
            reject(error);
        }
    });
};


let getBookInfoById = (bookId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: {id: bookId},
                raw: true,
            })

            if(book) {
                resolve(book);
            } else {
                resolve({});
            }
        } catch (error) {
            reject(error);
        }
    })
}

// cập nhật
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: {id: data.id}
            })
            if(book) {
                book.name = data.name;
                book.category = data.category;
                book.publisher = data.publisher;
                book.total_amount = data.total_amount;
                book.current_number = data.current_number;
                book.total_lost = data.total_lost;

                await book.save();
                let allBoooks = await db.books.findAll({
                    raw: true,
                });
                resolve(allBoooks);
            } else {
                resolve();
            }
            
        } catch (error) {
            reject(error);
        }
    });
}

// Xóa
let deleteBookById = (bookId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: {id: bookId}
            })
            if(book) {
               await book.destroy();
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}


module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getBookInfoById: getBookInfoById,
    updateUser: updateUser,
    deleteBookById: deleteBookById,
};
