var mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  rating: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Rating'
  }],
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema);
