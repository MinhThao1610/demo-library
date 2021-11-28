const db = require('../models/index');
const bcrypt = require('bcryptjs');

// API
let handleUserLogin = (username, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {}
            let isExist = await checkUserUserName(username);
            
            if(isExist) {
                let user = await db.staffs.findOne({
                    attributes: ['fullname', 'email', 'username', 'password'], // attributes dùng để lấy ra các dữ liệu theo mong muốn
                    where: {username: username},
                    raw: true,
                });
                if(user) {
                   let check = await bcrypt.compareSync(password, user.password);
                   if(check) {
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
    })
}


let checkUserUserName = (userName) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.staffs.findOne({
                where: {username: userName}
            })
            if(user) {
                resolve(true);
            } else {
                resolve(false);
            }

        } catch (error) {
            reject(error);
        }
    })
}


module.exports = {
    handleUserLogin: handleUserLogin,
}