var mongoose = require('mongoose');

var testDataSchema = new mongoose.Schema({
  data_field1: {
    type: String,
    required: true,
    default: "default"
  },
  data_field2: {
    type: Number,
    required: true,
    default: 99
  }
});

mongoose.model('TestData', testDataSchema);
