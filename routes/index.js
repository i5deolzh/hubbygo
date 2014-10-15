var express = require('express');
var router = express.Router();

var models = require('../models');
var Location = models.Location;

router.get('/', function(req, res){
    res.render('index', {
        title: 'welcome'
    });
});

router.get('/history', function(req, res){
    res.render('history', {
        title: 'history'
    });
});

router.get('/sandbox', function(req, res){
    res.render('sandbox', {
        docs: null
    });
});

router.get('/sandboxget', function(req, res){
	console.log('sandboxget');
    Location.find({}, function(err, docs){
		console.log(err);
        res.render('sandboxget', {
            docs: docs
        });
    });
});

module.exports = router;
