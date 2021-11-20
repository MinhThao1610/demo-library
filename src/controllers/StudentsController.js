const db = require('../models/index');

class StudentsController {
    // [GET] /students
    index = async (req, res) => {
        try {

            let data = await db.students.findAll(); // đang lỗi
            return res.render('students', {
                data: JSON.stringify(data)
            });
        } catch(err) {
            
            console.log('error');
        }
 
    //    res.render('students');
    }

    // [GET] /students/:slug
    show = (req, res) => {
        res.send('Students detail!!!');
    }
}

module.exports = new StudentsController();
