const express = require('express');
const {db_data, db_device} = require('../Database');

const router = express.Router();

let co2 = 0;
let people = 0;

let device = "device1"

let add_data = function () {
    let dataWithTime = {
        "time": Date.now(),
        "co2": co2,
        "people": people
    }
    db_data.addData(device, dataWithTime)
}

setInterval(add_data, 60000);

router.get('/:id', (req, res) => {    
    let id = req.params.id;
    db_data.getData(id).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

// TODO: think about how to support multiple devices
router.post('/:id/:type', (req, res) => {
    let id = req.params.id;
    let type = req.params.type;
    if(type === 'co2')
        co2 = req.body.co2;
    else if(type === 'people')
        people = req.body.people;

    res.send("OK");
    
});

// router.get('/:id', (req, res) => {
//     let id = req.params.id;
//     db_data.addData(id).then(devices => {
//         let id = req.params.id;
//         let device = devices.find(device => device._id === id);
//         res.send(device);
//     }).catch(err => {
//         console.log(err);
//         res.send(err);
//     });
// });

router.put('/', (req, res) => {

});

module.exports = router;
