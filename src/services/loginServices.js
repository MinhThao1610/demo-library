const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

// đăng ký
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.staffs.create({
                fullname: data.fullname,
                email: data.email,
                phoneNumber: data.phoneNumber,
                username: data.username,
                password: hashPasswordFromBcrypt,
            });
            resolve('ok');
        } catch (error) {
            reject(error);
        }
    });
};

// hash password
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
};

// hiển thị thông tin
// let getAllUser = () => {
//     // hàm Promise() để code thực thi trong hàm ròi mới chạy cái khác
//     return new Promise(async (resolve, reject) => {
//         try {
//             let users = db.books.findAll({
//                 raw: true,
//             });
//             resolve(users);
//         } catch (error) {
//             reject(error);
//         }
//     });
// };

module.exports = {
    createNewUser: createNewUser,
    // getAllUser: getAllUser,
};
