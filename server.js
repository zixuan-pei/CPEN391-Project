const express = require('express');
const db = require('./Database');
const deviceRoute = require('./APIs/devices');
const dataRoute = require('./APIs/data');

const PORT = process.env.PORT || 3000;

const app = express();

let deleteOldData = () => {
    db.deleteOldData(100)
        .then(message => console.log(message))
        .catch(err => console.log(err));
}

// setInterval(deleteOldData, 10000);

app.use(express.json());
app.use('/devices', deviceRoute);
app.use('/data', dataRoute);

app.get('/', (req, res) => {
    res.send("Please add /devices or /data after URL for testing.\n This is the dummy main page doing nothing.");    
});

app.listen(PORT, () => {
    console.log("Application starts.");
});