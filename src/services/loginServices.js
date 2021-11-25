const bcrypt = require('bcryptjs');
const db = require('../models/index');
const salt = bcrypt.genSaltSync(10);

// đăng ký
let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.staffs.create({
                fullname: data.fullname,
                email: data.email,
                phoneNumber: data.phoneNumber,
                username: data.username,
                password: data.password,
            });
            resolve('ok');
        } catch (error) {
            reject(error);
        }
    });

    // let hashPasswordFromBcrypt = await hashUserPassword(data.password);
    // console.log('data from services');
    // console.log(data);
};

// hash password hiện đang lỗi, làm sau
let hashUserPassword = (password) => {
    //cách 1
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (e) {
            reject(e);
        }
    });

    // cách 2
    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash(password, salt, function(err, hash) {
    //         // Store hash in your password DB.
    //         console.log('hash', hash); // lỗi

    // });
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
