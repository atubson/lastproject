const express = require('express');
const router = express.Router();
const User = require('../models/users');

//get a list from db

router.get('/cinema', function(req,res) {
    res.send({type: 'GET'});
});



//adding new item to db

router.post('/cinema', function (req, res) {
    User.create(req.body).then(function(user){
        res.send(user);
    });
});

//update

router.put('/cinema/:id', function (req, res) {
    res.send({type: 'PUT'});
});

//delete

router.delete('/cinema/:id', function (req, res) {
    res.send({type: 'DELETE' });
});

module.exports = router;