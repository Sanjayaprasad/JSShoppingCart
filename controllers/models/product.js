var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var ProductSchema = new Schema(
  {
    itemname: { type: String, required: true },
    itemprice: { type: Number, required: true },
    quantity: { type: Number },
    sizes: {type: String },
    created_at: Date,
    updated_at: Date
  }
);

// on every save, add the date
ProductSchema.pre('save', function(next) {
  // get the current date
  var currentDate = new Date();
  
  // change the updated_at field to current date
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

module.exports = mongoose.model('product', ProductSchema);
