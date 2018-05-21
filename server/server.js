require('./config/config.js');
const {mongoose} = require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');

const { addRoutes } = require('../controllers/controller.js');

const app = express();
const port = process.env.PORT || 3000; //To deploy to heroku

app.use(bodyParser.json());

addRoutes(app);

app.listen(port, () => {
  console.log(`Started on port ${port}.`);
})
