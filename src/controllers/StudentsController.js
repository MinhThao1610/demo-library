const db = require('../models/index');
const studentsServices = require('../services/studentsServices');

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
        if(studentId) {
            let studentData = await studentsServices.getStudentInfoById(studentId);
            res.render('students/edit', {
                student: studentData,
            });
            // return res.send('ok')
        } else {
            // console.log('error');
            return res.send('error')
        }
    };

    putStudent = async (req, res) => {
        let data = req.body;
        let allStudents = await studentsServices.updateUser(data);

        return res.render('students', {
            dataTable: allStudents,
        });
    }

    delete = async (req, res) => {
        let id = req.query.id;
        if(id) {
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
}

module.exports = new StudentsController();
