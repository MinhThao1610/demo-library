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
            let allStudents = await db.students.findAll({
                raw: true,
            });
            resolve(allStudents);
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

let getStudentInfoById = (studentId) => {
    return new Promise(async(resolve, reject) => {
        try {
            let student = await db.students.findOne({
                where: {id: studentId},
                raw: true,
            })

            if(student) {
                resolve(student);
            } else {
                resolve({});
            }
        } catch (error) {
            reject(error);
        }
    })
}

// cập nhật
let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await db.students.findOne({
                where: {id: data.id}
            })
            if(student) {
                student.MSSV = data.MSSV;
                student.firstName = data.firstName;
                student.lastName = data.lastName;
                student.class = data.class;
                student.faculty = data.faculty;
                student.address = data.address;
                student.phoneNumber = data.phoneNumber;
                student.create_date = data.create_date;
                student.expire_date = data.expire_date;

                await student.save();
                let allStudents = await db.students.findAll({
                    raw: true,
                });
                resolve(allStudents);
            } else {
                resolve();
            }
            
        } catch (error) {
            reject(error);
        }
    })
}

// Xóa
let deleteStudentById = (studentId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await db.students.findOne({
                where: {id: studentId}
            })
            if(student) {
               await student.destroy();
            }
            resolve();
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getStudentInfoById: getStudentInfoById,
    updateUser: updateUser,
    deleteStudentById: deleteStudentById,
};
