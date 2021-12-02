const db = require('../models/index');

// API hiển thị
let getAllBorrow = (borrowId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let borrows = '';
            if(borrowId == 'ALL') {
                borrows = await db.borrow_books.findAll({
                    attributes: {exclude: ['createdAt', 'updatedAt']}
                });

            } 
            if(borrowId && borrowId !== 'ALL') {
                borrows = await db.borrow_books.findOne({
                    where: {id: borrowId}
                })
            }
            resolve(borrows);

        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getAllBorrow: getAllBorrow,
}