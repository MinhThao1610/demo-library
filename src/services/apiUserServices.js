const db = require('../models/index');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

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

// API
let handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            let isExist = await checkUserUserName(username);

            if (isExist) {
                let user = await db.staffs.findOne({
                    attributes: ['fullname', 'email', 'username', 'password'], // attributes dùng để lấy ra các dữ liệu theo mong muốn
                    where: { username: username },
                    raw: true,
                });
                if (user) {
                    let check = await bcrypt.compareSync(
                        password,
                        user.password,
                    );
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'OK';
                        delete user.password;
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Sai mật khẩu';
                    }
                } else {
                    userData.errCode = 2;
                    userData.errMessage = 'Không có người dùng đang tìm';
                }
            } else {
                userData.errCode = 1;
                userData.errMessage = 'Tên tài khoản của bạn k tồn tại!';
            }
            resolve(userData);
        } catch (error) {
            reject(error);
        }
    });
};

let checkUserUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.staffs.findOne({
                where: { username: userName },
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

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.staffs.findOne({
                where: { email: email },
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

// api đăng ký
let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check username
            let checkUser = await checkUserUserName(data.username);
            // check email
            let checkEmail = await checkUserEmail(data.email);

            if (checkUser == true) {
                resolve({
                    errCode: 1,
                    message: 'Tên tài khoản đã được sử dụng!',
                });
            } else if (checkEmail == true) {
                resolve({
                    errCode: 2,
                    message: 'Email đã được sử dụng!',
                });
            } else {
                let hashPasswordFromBcrypt = await hashUserPassword(
                    data.password,
                );
                await db.staffs.create({
                    fullname: data.fullname,
                    email: data.email,
                    phoneNumber: data.phoneNumber,
                    username: data.username,
                    password: hashPasswordFromBcrypt,
                });
                resolve({
                    errCode: 0,
                    message: 'OK',
                });
            }
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    handleUserLogin: handleUserLogin,
    createNewUser: createNewUser,
};
