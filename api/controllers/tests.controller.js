var mongoose = require('mongoose');
var TestData = mongoose.model('TestData');


function getTest(req, res) {
  console.log('getTest called');
  TestData
    .find()
    .exec(function(err, testDataModels) {
      console.log('Found test data models: ', testDataModels.length);
      res.status(200).json({testDataModels:testDataModels});
  });
}

function postTest(req, res) {
  console.log('postTest called');
  TestData.create({
      data_field1: req.body.form_field1 ,
      data_field2: req.body.form_field2
    }, function(error, testDataModel) {
          if (error) {
            console.log('Error saving object to the db!', error);
            res.status(400).json({error: "could not save to the database"});
          } else {
            console.log('Object saved to the database');
            res.status(200).json(testDataModel);
          };
       }
  );
}

module.exports = {
  getTest    : getTest,
  postTest : postTest
};
