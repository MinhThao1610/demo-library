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

// xóa
let deleteBorrow = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrow = await db.borrow_books.findOne({
                where: { id: borrowId },
            });
            if (!borrow) {
                resolve({
                    errCode: 2,
                    errMessage: 'Không tồn tại',
                });
            }
            await db.borrow_books.destroy({
                where: { id: borrowId },
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
let updateBorrow = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: 'Thiếu thông số đầu vào',
                });
            }

            let borrow = await db.borrow_books.findOne({
                where: { id: data.id },
                raw: false,
            });
            if (borrow) {
                borrow.MSSV = data.MSSV;
                borrow.book_id = data.book_id;
                borrow.borrow_date = data.borrow_date;
                borrow.pay_date = data.pay_date;
                borrow.staff = data.staff;
                borrow.note = data.note;

                await borrow.save();
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

// lấy thông tin
let searchBorrow = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrows = '';
            if (borrowId == 'ALL') {
                borrows = await db.borrow_books.findAll({
                    attributes: ['staff'],
                });
            }
            if (borrowId && borrowId !== 'ALL') {
                borrows = await db.borrow_books.findOne({
                    where: { id: borrowId },
                    attributes: ['staff'],
                });
            }
            resolve(borrows);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllBorrow: getAllBorrow,
    addNewBorrow: addNewBorrow,
    deleteBorrow: deleteBorrow,
    updateBorrow: updateBorrow,
    searchBorrow: searchBorrow,
};
