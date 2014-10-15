var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//var uri = 'mongodb://localhost:27017/hubbygo_dev'
//var uri = 'mongodb://mongo.duapp.com:8908/HBXAuwfjLeJlMtOTDkHZ'

var db = exports.db = mongoose.createConnection();

var host = 'localhost';
var database = 'hubbygo_dev';
var port = 27017;

//var host = 'mongo.duapp.com';
//var database = 'HBXAuwfjLeJlMtOTDkHZ';
//var port = 8908;

var options = {
    db: {
        native_parser: true
    },
    server: {
        poolSize: 5
    },
    user: '',
    pass: ''
}

//qj10R0k4Co2iVdOdZAh2Vdwi
//uTy9HeIsB4kfyIlSyaNshadUeGUpAMYX

db.open(host, database, port, options, function(err){
    console.log('mongodb connected');
});

db.on('error', function(err){
    console.log('mongodb error');
    db.close();
});
db.on('close', function(){
    console.log('mongodb close');
    db.open(host, database, port, options);
});

// models
var LocationSchema = new Schema({
    time: {
        type: Date,
        'default': Date.now
    },
    code: {
        type: String
    },
    lontitude: {
        type: Number,
        'default': 0
    },
    latitude: {
        type: Number,
        'default': 0
    },
    radius: {
        type: Number,
        'default': 0
    },
    speed: {
        type: Number,
        'default': 0
    },
    direction: {
        type: Number,
        'default': 0
    },
    addr: {
        type: String
    }
});

db.model('Location', LocationSchema);

exports.Location = db.model('Location');
