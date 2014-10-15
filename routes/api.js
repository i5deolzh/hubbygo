var express = require('express');
var router = express.Router();

var models = require('../models');
var Location = models.Location;

router.get('/', function(req, res){
    var location = new Location();
    location.time = req.query.time;
    location.code = req.query.code;
    location.lontitude = req.query.lontitude;
    location.latitude = req.query.latitude;
    location.radius = req.query.radius;
    location.speed = req.query.speed;
    location.direction = req.query.direction;
    location.addr = req.query.addr;
    location.save(function(err, item){
        res.json(200, {
            error: null
        })
    });
});

module.exports = router;
