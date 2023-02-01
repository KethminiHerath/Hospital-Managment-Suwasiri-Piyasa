const mongoose = require('mongoose');

var Doctor = mongoose.model('doctor', {
    dr_name: { type: String },
    specialization: { type: String },
    email: { type: String },
    awailableDate: { type: String },
    awailableTime: { type: String },
});

module.exports = { Doctor };