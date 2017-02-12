const express = require('express')
const app = express()
const router = express.Router()
const trans = require('./controller/usertransactions.controller')
const item = require('./controller/items.controller')
const cors = require('cors')
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/',router)
app.listen(3000)
