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

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Please add /addData or /getData after URL for testing.\n This is the dummy main page doing nothing.");    
});

app.get('/addData', (req, res) => {
    db.addData(testData).then(data => {
        res.send(data);
    }).catch(err => {
        res.send(err);
    });
    
});

app.post('/setData', (req, res) => {
    console.log("Req body test : Please add /addData or /getData after URL for testing.\n This is the dummy main page doing nothing. Below is req.body:")
    console.log(req.body);
    // Only one object
    // db.addData(req.body).then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.send(err);
    // });

    // Array of Objects

    
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