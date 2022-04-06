const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const vetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Enter category name!']
  },
  photo: String,
  lat:{
    type: String,
  },
  lon:{
    type: String,
  },
  address:{
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});



const Vet = mongoose.model('Vet', vetSchema);

module.exports = Vet;
