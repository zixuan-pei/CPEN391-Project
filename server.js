const express = require('express');
const app = express();
const Database = require('./Database');


const PORT = process.env.PORT || 3000;
const mongodbUrl = 'mongodb+srv://instance-0:'+process.env.MONGO_PASSWORD+'@cluster0.xuiqx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const mongodbName = "cpen322-messenger";
const db = new Database(mongodbUrl, mongodbName);

app.get('/', (req, res) => {
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