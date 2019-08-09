const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const apiRoutes = require('./routes/api');
const { firebase, config } = require('./config/firebase');

firebase.initializeApp(config)

const app = express();

// tell express to use cors
app.use(cors());
app.options('*', cors());

// tell express to use body parser
app.use(bodyParser.json());

// use todo router
app.use('/api', apiRoutes);

module.exports = app;