const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

// Thêm
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.borrow_books.create({
                MSSV: data.MSSV,
                book_id: data.book_id,
                borrow_date: data.borrow_date,
                pay_date: data.pay_date,
                staff: data.staff,
                note: data.note,
            });
            resolve('ok');
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
            let users = db.borrow_books.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
};
