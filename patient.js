const mongoose = require('mongoose');

var Patient = mongoose.model('Patient', {
    dr_name: { type: String },
    date: { type: String },
    name: { type: String },
    age: { type: Number },
    phone: { type: Number },
    email: { type: String },
    ch_diese: { type: String },
    pay_method: { type: String }
});

module.exports = { Patient };