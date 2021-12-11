const db = require('../models/index');

let getAllCategorys = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = '';
            if (categoryId == 'ALL') {
                category = await db.category.findAll({
                    attributes: ['name'],
                });
            }
            if (categoryId && categoryId !== 'ALL') {
                category = await db.category.findOne({
                    where: { id: categoryId },
                    attributes: ['name'],
                });
            }
            resolve(category);
        } catch (error) {
            reject(error);
        }
    });
};

let getAllPublisher = (publisherId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let publisher = '';
            if (publisherId == 'ALL') {
                publisher = await db.publisher.findAll({
                    attributes: ['name'],
                });
            }
            if (publisherId && publisherId !== 'ALL') {
                publisher = await db.publisher.findOne({
                    where: { id: publisherId },
                    attributes: ['name'],
                });
            }
            resolve(publisher);
        } catch (error) {
            reject(error);
        }
    });
};

let getAllFaculty = (facultyId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let faculty = '';
            if (facultyId == 'ALL') {
                faculty = await db.faculty.findAll({
                    attributes: ['name'],
                });
            }
            if (facultyId && facultyId !== 'ALL') {
                faculty = await db.faculty.findOne({
                    where: { id: facultyId },
                    attributes: ['name'],
                });
            }
            resolve(faculty);
        } catch (error) {
            reject(error);
        }
    });
};

let getAllClass = (classId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let Class = '';
            if (classId == 'ALL') {
                Class = await db.class.findAll({
                    attributes: ['name'],
                });
            }
            if (classId && classId !== 'ALL') {
                Class = await db.class.findOne({
                    where: { id: classId },
                    attributes: ['name'],
                });
            }
            resolve(Class);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    getAllCategorys: getAllCategorys,
    getAllPublisher: getAllPublisher,
    getAllFaculty: getAllFaculty,
    getAllClass: getAllClass,
};
