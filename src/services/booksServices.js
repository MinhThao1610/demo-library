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
            let users = db.books.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};

// cập nhật
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let book = await db.books.findOne({
                where: {id: data.id}
            })
            if(book) {
                books.name = data.name;
                books.category = data.category;
                books.publisher = data.publisher;
                book.total_amount = data.total_amount;
                books.current_number = data.current_number;
                books.total_lost = data.total_lost;

                await book.save();
                resolve();
            } else {
                resolve();
            }
            
        } catch (error) {
            reject(error);
        }
    })
}

let getBookInfoId = () => {

}



module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getBookInfoId: getBookInfoId,
    updateUser: updateUser,
};
