const express = require('express');
const Database = require('./Database');
const deviceRoute = require('./APIs/devices');
const dataRoute = require('./APIs/data');
const config = require('./config/default');
// const password = require('./config/password');

const PORT = process.env.PORT || 3000;
const mongodbPassword = process.env.MONGO_PASSWORD || password.dbPassword;
// const mongodbPassword = process.env.MONGO_PASSWORD || password.dbPassword;
const mongodbUrl = config.mongodbUrl_0 + mongodbPassword + config.mongodbUrl_1;
const mongodbName = config.mongodbName;

const app = express();
const db = new Database(mongodbUrl, mongodbName);

app.use(express.json());
app.use('/devices', deviceRoute);
app.use('/data', dataRoute);

app.get('/', (req, res) => {
    res.send("Please add /devices or /data after URL for testing.\n This is the dummy main page doing nothing.");    
});

app.listen(PORT, () => {
    console.log("Application starts.");
});