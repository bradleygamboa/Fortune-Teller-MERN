var mongoose = require('mongoose');

var dbUrl = 'mongodb://bradleygamboa:texas@ds131729.mlab.com:31729/fortuneteller';
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
