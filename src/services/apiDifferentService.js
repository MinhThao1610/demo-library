const db = require('../models/index');

let getAllCategorys = (categoryId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let category = '';
            if (categoryId == 'ALL') {
                category = await db.category.findAll();
            }
            if (categoryId && categoryId !== 'ALL') {
                category = await db.category.findOne({
                    where: { id: categoryId },
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
                publisher = await db.publisher.findAll();
            }
            if (publisherId && publisherId !== 'ALL') {
                publisher = await db.publisher.findOne({
                    where: { id: publisherId },
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
                faculty = await db.faculty.findAll();
            }
            if (facultyId && facultyId !== 'ALL') {
                faculty = await db.faculty.findOne({
                    where: { id: facultyId },
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
                Class = await db.class.findAll();
            }
            if (classId && classId !== 'ALL') {
                Class = await db.class.findOne({
                    where: { id: classId },
                });
            }
            resolve(Class);
        } catch (error) {
            reject(error);
        }
    });
};

// check th??? lo???i: n???u c?? t??n r???i th?? tr??? v??? true, k th?? tr??? v??? false
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

// check nh?? xu???t b???n: n???u c?? t??n r???i th?? tr??? v??? true, k th?? tr??? v??? false
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

// check l???p h???c: n???u c?? t??n r???i th?? tr??? v??? true, k th?? tr??? v??? false
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

// check khoa: n???u c?? t??n r???i th?? tr??? v??? true, k th?? tr??? v??? false
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

// api th??m th??? lo???i
let addNewCategory = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkCategory(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Th??? lo???i ???? t???n t???i!',
                });
            } else {
                await db.category.create({
                    name: data.name,
                });
            }
            resolve('Th??m th??nh c??ng');
        } catch (error) {
            reject(error);
        }
    });
};

// api th??m nh?? xu???t b???n
let addNewPublisher = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkPublisher(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Nh?? xu???t b???n ???? t???n t???i!',
                });
            } else {
                await db.publisher.create({
                    name: data.name,
                });
            }
            resolve('Th??m th??nh c??ng');
        } catch (error) {
            reject(error);
        }
    });
};

// api th??m l???p
let addNewClass = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkClass(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'L???p ???? t???n t???i!',
                });
            } else {
                await db.class.create({
                    name: data.name,
                });
            }
            resolve('Th??m th??nh c??ng');
        } catch (error) {
            reject(error);
        }
    });
};

// api th??m khoa
let addNewFaculty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let check = await checkFaculty(data.name);
            if (check) {
                resolve({
                    errCode: 1,
                    message: 'Khoa ???? t???n t???i!',
                });
            } else {
                await db.faculty.create({
                    name: data.name,
                });
            }
            resolve('Th??m th??nh c??ng');
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
