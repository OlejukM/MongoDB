const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const api = require('./routes/user.route');
// const api2 = require('./routes/article.route');
const app = express();


const mongoose = require('mongoose');
const dev_db_url = 'mongodb://localhost/tc-mongo-homework';
// const dev_db_url = 'mongodb://olezhuk:pas123@ds111455.mlab.com:11455/mangoosedb';
const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB, {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.createCollection('users');
db.createCollection('articles');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/users', api);
// app.use('/article', api2);

const port = 4040;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
