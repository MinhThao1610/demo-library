const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config');

// cors
app.use(
    cors({
        origin: true,
    }),
);

// Connect to DB
db.connectBD();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
