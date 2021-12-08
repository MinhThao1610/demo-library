const { sequelize } = require('../models/index');
const db = require('../models/index');

// API hiển thị
let getAllStudents = (MSSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let students = '';
            if (MSSV == 'ALL') {
                students = await sequelize.query("SELECT s.id, s.MSSV, s.firstName, s.lastName, c.name as class, f.name as faculty, s.address, s.phoneNumber, s.create_date, s.expire_date, s.createdAt, s.updatedAt FROM students s JOIN class c ON s.class = c.id JOIN faculty f ON s.faculty = f.id",
                {
                    type: db.SELECT 
                });
                // students = await db.students.findAll({
                    
                //     attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
                // });
                
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

// xóa
let deleteStudent = (mssv) => {
    return new Promise(async (resolve, reject) => {
        try {
            let student = await db.students.findOne({
                where: { MSSV: mssv },
            });
            if (!student) {
                resolve({
                    errCode: 2,
                    errMessage: 'Không tồn tại',
                });
            }
            await db.students.destroy({
                where: { MSSV: mssv },
            });
            resolve({
                errCode: 0,
                errMessage: 'Đã xóa sinh viên',
            });
        } catch (error) {
            reject(error);
        }
    });
};

// sửa
let updateStudent = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.MSSV) {
                resolve({
                    errCode: 2,
                    errMessage: 'Thiếu thông số đầu vào',
                });
            }

            let student = await db.students.findOne({
                where: { MSSV: data.MSSV },
                raw: false,
            });
            if (student) {
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
let searchStudent = (MSSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let students = '';
            if (MSSV == 'ALL') {
                students = await db.students.findAll({
                    attributes: ['class', 'faculty'],
                });
            }
            if (MSSV && MSSV !== 'ALL') {
                students = await db.students.findOne({
                    where: { MSSV: MSSV },
                    attributes: ['class', 'faculty'],
                });
            }
            resolve(students);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllStudents: getAllStudents,
    addNewStudent: addNewStudent,
    deleteStudent: deleteStudent,
    updateStudent: updateStudent,
    searchStudent: searchStudent,
};
