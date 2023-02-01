const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Schedule } = require('../models/schedule');

// => localhost:3000/patient/
router.get('/', (req, res) => {
    Schedule.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Patient :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Schedule.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Schedule :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var sch = new Schedule({
        date: req.body.date,
        time: req.body.time,
        drName: req.body.drName,
        noOfP: req.body.noOfP,
        room: req.body.room,
    
    });
    sch.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schedule Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var sch = ({
            date: req.body.date,
            time: req.body.time,
            drName: req.body.drName,
            noOfP: req.body.noOfP,
            room: req.body.room,
        
        });
        Schedule.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Schedule Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        Schedule.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Patient Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

 module.exports = router;