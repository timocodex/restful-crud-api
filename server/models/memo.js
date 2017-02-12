var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create a schema
var memoSchema = new Schema({
  todo: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var Memo = mongoose.model('memos', memoSchema);

// make this available to our users in our Node applications
module.exports = Memo;
