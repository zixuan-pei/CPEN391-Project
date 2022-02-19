const express = require('express');
const db = require('../Database');

const router = express.Router();

router.get('/', (req, res) => {
    db.getData().then(devices => {
        res.send(devices);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

router.post('/', (req, res) => {
    db.addData(req.body).then(message => {
        res.send(message);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

router.put('/', (req, res) => {

});

module.exports = router;
