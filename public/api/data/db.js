var mongoose = require('mongoose');

var databaseUri = 'mongodb://bradley:gamboa@ds131729.mlab.com:31729/fortuneteller';

if (process.env.MONGODB_URI) {
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}

var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function() {
    console.log('MongoDB connected to: ' + databaseUri);
});

//Bring in the models
require('./testData.model.js');
//require('./modelname.model.js');
