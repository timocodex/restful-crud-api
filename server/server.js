const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var mongoose = require('mongoose');
//mongoose connection to mongodb
mongoose.connect('mongodb://localhost/memo');
mongoose.Promise = global.Promise


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',routes)
app.listen(3000)

module.exports = app;
