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

// check thể loại: nếu có tên rồi thì trả về true, k thì trả về false
let checkCategory = (nameCategory) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.category.findOne({
                where: { name: nameCategory },
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

// check nhà xuất bản: nếu có tên rồi thì trả về true, k thì trả về false
let checkPublisher = (namePublisher) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.publisher.findOne({
                where: { name: namePublisher },
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

// check lớp học: nếu có tên rồi thì trả về true, k thì trả về false
let checkClass = (nameClass) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.class.findOne({
                where: { name: nameClass },
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

// check khoa: nếu có tên rồi thì trả về true, k thì trả về false
let checkFaculty = (nameFaculty) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.faculty.findOne({
                where: { name: nameFaculty },
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

// api thêm thể loại
let addNewCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkCategory(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Thể loại đã tồn tại!',
                });
            } else {
                await db.category.create({
                    name: data.name,
                });
            }
            resolve('Thêm thành công');
        } catch (error) {
            reject(error);
        }
    });
};

// api thêm nhà xuất bản
let addNewPublisher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkPublisher(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Nhà xuất bản đã tồn tại!',
                });
            } else {
                await db.publisher.create({
                    name: data.name,
                });
            }
            resolve('Thêm thành công');
        } catch (error) {
            reject(error);
        }
    });
};

// api thêm lớp
let addNewClass = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkClass(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Lớp đã tồn tại!',
                });
            } else {
                await db.class.create({
                    name: data.name,
                });
            }
            resolve('Thêm thành công');
        } catch (error) {
            reject(error);
        }
    });
};

// api thêm khoa
let addNewFaculty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkFaculty(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Khoa đã tồn tại!',
                });
            } else {
                await db.faculty.create({
                    name: data.name,
                });
            }
            resolve('Thêm thành công');
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
    addNewCategory: addNewCategory,
    addNewPublisher: addNewPublisher,
    addNewClass: addNewClass,
    addNewFaculty: addNewFaculty,
};
