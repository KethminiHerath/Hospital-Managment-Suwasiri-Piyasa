const mongoose = require('mongoose');

var Schedule = mongoose.model('Schedule', {
    date: { type: String },
    time: { type: String },
    drName: { type: String },
    noOfP: { type: Number },
    room: { type: String },
    
});


module.exports = { Schedule };