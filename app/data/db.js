var mongoose = require('mongoose');

var databaseUri = 'mongodb://bradley:gamboa@ds137139.mlab.com:37139/heroku_6k95mcbr';

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
