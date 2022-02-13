const express = require('express');
const Database = require('./Database');


const PORT = process.env.PORT || 3000;
const mongodbUrl = 'mongodb+srv://instance-0:'+process.env.MONGO_PASSWORD+'@cluster0.xuiqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongodbName = "CPEN391-Project";

const app = express();
const db = new Database(mongodbUrl, mongodbName);

const testData = {
    _id: 'testdata',
    time: 1,
    co2: 100,
    people: 10
}

app.get('/addData', (req, res) => {
    db.getData().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
    
});

app.get('/', (req, res) => {
    console.log(testData);
    db.addData(JSON.stringify(testData)).then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
    
});

app.get('/getData', (req, res) => {
    db.getData().then(data => {
        console.log(data);
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
    
});

app.listen(PORT, () => {
    console.log("Application starts.");
});