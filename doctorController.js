const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Doctor } = require('../models/doctor');

// => localhost:3000/doctor/
router.get('/', (req, res) => {
    Doctor.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Doctor :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Doctor.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Doctor :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var dctr = new Doctor({
        dr_name: req.body. dr_name,
        specialization: req.body. specialization,
        email: req.body.email,
        awailableDate: req.body.awailableDate,
        awailableTime: req.body.awailableTime,
        
    });
    dctr.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Doctor Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var dctr = ({
            specialization: req.body. specialization,
            email: req.body.email,
            awailableDate: req.body.awailableDate,
            awailableTime: req.body.awailableTime,
        
        });
    Doctor.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Doctor Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Patient.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Doctor Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

 module.exports = router;