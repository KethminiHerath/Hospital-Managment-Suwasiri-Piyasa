const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var patientController = require('./controllers/patientController.js');
var doctorController = require('./controllers/doctorController.js');
var scheduleController = require('./controllers/scheduleController.js');


var app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000'));


app.use('/patient', patientController); 
app.use('/doctor', doctorController);  
app.use('/schedule', scheduleController);   