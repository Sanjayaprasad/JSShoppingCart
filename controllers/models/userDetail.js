var mongoose = require('mongoose'),
	  Schema = mongoose.Schema;


var userDetailsSchema = new Schema(
  {
    user_name: { type: String },
    user_phonenumber: { type: String },
    user_email: { type: String },
    user_Address: { type: String },
    created_at: Date,
    updated_at: Date
  }
);

// on every save, add the date
userDetailsSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model('userdetails', userDetailsSchema);