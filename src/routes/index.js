const booksRouter = require('./books');
const siteRouter = require('./site');
const studentsRouter = require('./students');
const borrowRouter = require('./borrow');

function route(app) {
    app.use('/books', booksRouter);

    app.use('/students', studentsRouter);

    app.use('/borrow', borrowRouter);

    app.use('/', siteRouter);

    // app.get('/search', (req, res) => {
    //     res.render('search');
    // });

    // app.post('/search', (req, res) => {
    //     res.render('search');
    // });
}

module.exports = route;
