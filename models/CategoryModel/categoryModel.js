const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Enter category name!']
  },
  photo: {
    type:String,
    default:"N/A"
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});



const Category = mongoose.model('Catgeory', categorySchema);

module.exports = Category;
