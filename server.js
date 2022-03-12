const express = require('express');
const {db_data, db_device} = require('./Database');
const deviceRoute = require('./APIs/devices');
const dataRoute = require('./APIs/data');

const PORT = process.env.PORT || 3000;

const app = express();

console.log(db_data);

// let deleteOldData = () => {
//     // Delete data from 24 hours ago (24h = 86400000ms)
//     // db.deleteOldData(Date.now().valueOf() - 86400000)
//     // Test delete: 10min
//     db_data.deleteOldData(Date.now().valueOf() - 600000)
//         .then(message => console.log(message))
//         .catch(err => console.log(err));
// }

// setInterval(deleteOldData, 100000);

app.use(express.json());
app.use('/devices', deviceRoute);
app.use('/data', dataRoute);

app.get('/', (req, res) => {
    res.send("Please add /devices or /data after URL for testing.\n This is the dummy main page doing nothing.");    
});

app.listen(PORT, () => {
    console.log("Application starts.");
});