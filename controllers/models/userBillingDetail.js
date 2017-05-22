var mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


var userBillingDetailsSchema = new Schema(
  {
    name: { type: String },
    phonenumber: { type: Number },
    Address: { type: String },
  }
);

module.exports = mongoose.model('userbillingdetails', userBillingDetailsSchema);