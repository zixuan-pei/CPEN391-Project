const express = require('express');
const {db_data, db_device} = require('../Database');

const router = express.Router();

router.get('/:id', (req, res) => {    
    let id = req.params.id;
    db_data.getData(id).then(data => {
        res.send(data);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
});

router.post('/:id', (req, res) => {
    let id = req.params.id;
    let dataWithTime = {"time": Date.now(), ...req.body};
    db_data.addData(id, dataWithTime).then(message => {
        res.send(message);
    }).catch(err => {
        console.log(err);
        res.send(err);
    });
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
