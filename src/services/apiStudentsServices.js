const db = require('../models/index');

// API hiển thị
let getAllStudents = (MSSV) => {
    return new Promise(async (resolve, reject) => {
        try {
            let students = '';
            if(MSSV == 'ALL') {
                students = await db.students.findAll({
                    attributes: {exclude: ['id', 'createdAt', 'updatedAt']}
                });

            } 
            if(MSSV && MSSV !== 'ALL') {
                students = await db.students.findOne({
                    where: {MSSV: MSSV}
                })
            }
            resolve(students);

        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    getAllStudents: getAllStudents,
}