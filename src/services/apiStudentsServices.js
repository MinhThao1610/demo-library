const db = require('../models/index');

// API hiển thị
let getAllStudents = (MSSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let students = '';
            if (MSSV == 'ALL') {
                students = await db.students.findAll({
                    attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                });
            }
            if (MSSV && MSSV !== 'ALL') {
                students = await db.students.findOne({
                    where: { MSSV: MSSV },
                });
            }
            resolve(students);
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

// api thêm sinh viên
let addNewStudent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // check mssv
            let check = await checkStudentMssv(data.MSSV);
            if (check == true) {
                resolve({
                    errCode: 1,
                    message: 'Sinh viên đã tồn tại!',
                });
            } else {
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
            }
            let allStudents = await db.students.findAll({
                raw: true,
            });
            resolve(allStudents);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllStudents: getAllStudents,
    addNewStudent: addNewStudent,
};
