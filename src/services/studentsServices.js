const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

// Thêm
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.students.create({
                MSSV: data.MSSV,
                firstName: data.firstName,
                lastName: data.lastName,
                class: data.class,
                faculty: data.faculty,
                address: data.address,
                phoneNumber: data.phoneNumber,
                create_date: data.create_date,
                expire_date: data.expire_date,
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
            let users = db.students.findAll({
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
