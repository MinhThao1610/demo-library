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
            let allBorrows = await db.borrow_books.findAll({
                raw: true,
            });
            resolve(allBorrows);
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

let getBorrowInfoById = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrow = await db.borrow_books.findOne({
                where: { id: borrowId },
                raw: true,
            });

            if (borrow) {
                resolve(borrow);
            } else {
                resolve({});
            }
        } catch (error) {
            reject(error);
        }
    });
};

// cập nhật
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrow = await db.borrow_books.findOne({
                where: { id: data.id },
            });
            if (borrow) {
                borrow.MSSV = data.MSSV;
                borrow.book_id = data.book_id;
                borrow.borrow_date = data.borrow_date;
                borrow.pay_date = data.pay_date;
                borrow.staff = data.staff;
                borrow.note = data.note;

                await borrow.save();
                let allBorrows = await db.borrow_books.findAll({
                    raw: true,
                });
                resolve(allBorrows);
            } else {
                resolve();
            }
        } catch (error) {
            reject(error);
        }
    });
};

let deleteBorrowById = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrow = await db.borrow_books.findOne({
                where: { id: borrowId },
            });
            if (borrow) {
                await borrow.destroy();
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getBorrowInfoById: getBorrowInfoById,
    updateUser: updateUser,
    deleteBorrowById: deleteBorrowById,
};
