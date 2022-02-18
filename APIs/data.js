const express = require('express');
const Database = require('../Database');
const config = require('../config/default');
const password = require('../config/password');

const mongodbPassword = process.env.MONGO_PASSWORD || password.dbPassword;
const mongodbUrl = config.mongodbUrl_0 + mongodbPassword + config.mongodbUrl_1;
const mongodbName = config.mongodbName;

const router = express.Router();
const db = new Database(mongodbUrl, mongodbName);

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
