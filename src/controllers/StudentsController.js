const db = require('../models/index');
const studentsServices = require('../services/studentsServices');
const apiStudentsServices = require('../services/apiStudentsServices');

class StudentsController {
    // [GET] /students
    index = async (req, res) => {
        let data = await studentsServices.getAllUser();
        console.log(data);
        return res.render('students', {
            dataTable: data,
        });

        //    res.render('students');
    };

    // [GET] /students/:slug
    show = (req, res) => {
        res.send('Students detail!!!');
    };

    add = (req, res) => {
        res.render('students/add');
    };

    postAdd = async (req, res) => {
        let message = await studentsServices.createNewUser(req.body);
        console.log(message);
        return res.render('students', {
            dataTable: message,
        });
    };

    edit = async (req, res) => {
        let studentId = req.query.id;
        if (studentId) {
            let studentData = await studentsServices.getStudentInfoById(
                studentId,
            );
            res.render('students/edit', {
                student: studentData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error');
        }
    };

    putStudent = async (req, res) => {
        let data = req.body;
        let allStudents = await studentsServices.updateUser(data);

        return res.render('students', {
            dataTable: allStudents,
        });
    };

    delete = async (req, res) => {
        let id = req.query.id;
        if (id) {
            await studentsServices.deleteStudentById(id);
            let data = await studentsServices.getAllUser();
            console.log(data);
            return res.render('students', {
                dataTable: data,
            });
        } else {
            return res.send('error');
        }
    };

    // api hiển thị
    AllStudents = async (req, res) => {
        let MSSV = req.query.MSSV; // truyền vào all hoặc MSSV

        if (!MSSV) {
            return res.status(200).json({
                errCode: 1,
                errMessage: 'Chưa truyền vào MSSV',
                students: [],
            });
        }

        let students = await apiStudentsServices.getAllStudents(MSSV);

        return res.status(200).json({
            errCode: 0,
            errMessage: 'OK',
            students,
        });
    };

    // api thêm
    apiAddStudent = async (req, res) => {
        let message = await apiStudentsServices.addNewStudent(req.body);
        console.log(message);
        return res.status(200).json(message);
    };

    // api xóa
    apiDeleteStudent = async (req, res) => {
        if(!req.body.MSSV) {
            return res.status(200).json({
                errCode: 1,
                errMessage: "Thiếu thông số bắt buộc"
            })
        }
        let message = await apiStudentsServices.deleteStudent(req.body.MSSV);
        return res.status(200).json(message);
    }

    // api sửa
    apiEditStudent = async (req,res) => {
        let data = req.body;
        let message = await apiStudentsServices.updateStudent(data);
        return res.status(200).json(message);
    }
}

module.exports = new StudentsController();
