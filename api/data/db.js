var mongoose = require('mongoose');

var dbUrl = 'mongodb://bradley:gamboa@ds137139.mlab.com:37139/heroku_6k95mcbr';
mongoose.connect(dbUrl);


mongoose.connection.on('connected', function(){
  console.log('MongoDB connected to ' + dbUrl);
});

mongoose.connection.on('disconnected', function(){
  console.log('MongoDB disconnected from ' + dbUrl);
});

mongoose.connection.on('error', function(error){
  console.log('MongoDB error: ' + error);
});

//Bring in the models
require('./testData.model.js');
//require('./modelname.model.js');
