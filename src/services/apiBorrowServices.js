const db = require('../models/index');

// API hiển thị
let getAllBorrow = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrows = '';
            if (borrowId == 'ALL') {
                borrows = await db.borrow_books.findAll({
                    attributes: { exclude: ['createdAt', 'updatedAt'] },
                });
            }
            if (borrowId && borrowId !== 'ALL') {
                borrows = await db.borrow_books.findOne({
                    where: { id: borrowId },
                });
            }
            resolve(borrows);
        } catch (error) {
            reject(error);
        }
    });
};

let checkStudentMssv = (mssv) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.students.findOne({
                where: { MSSV: mssv },
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

// api thêm phiên mượn sách
let addNewBorrow = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check mssv
            let checkMssv = await checkStudentMssv(data.MSSV);
            if (checkMssv == false) {
                resolve({
                    errCode: 1,
                    message: 'Sinh viên chưa tồn tại, bạn cần thêm sinh viên!',
                });
            } else {
                await db.borrow_books.create({
                    MSSV: data.MSSV,
                    book_id: data.book_id,
                    borrow_date: data.borrow_date,
                    pay_date: data.pay_date,
                    staff: data.staff,
                    note: data.note,
                });
            }
            let allBorrows = await db.borrow_books.findAll({
                raw: true,
            });
            resolve(allBorrows);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllBorrow: getAllBorrow,
    addNewBorrow: addNewBorrow,
};
