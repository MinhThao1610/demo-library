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
        res.render('add');
    };

    postAdd = async (req, res) => {
        let message = await studentsServices.createNewUser(req.body);
        console.log(message);
        return res.render('students');
    };
}

module.exports = new StudentsController();
