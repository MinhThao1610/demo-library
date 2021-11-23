const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('book_management', 'root', '16102000', {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false,
});

let connectBD = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = { connectBD };
