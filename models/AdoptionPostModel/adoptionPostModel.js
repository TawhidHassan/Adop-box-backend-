const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { type } = require('os');

const adoptionPostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
    required: [true, 'Enter uder id!']
  },
  patName: {
    type: String,
    required: [true, 'Enter pat name!']
  },
  photo: [
    String
  ],
  patType: {
    type: String,
    enum: ['Tame', 'Stray'],
    required: [true, 'Enter patType!']
  },
  Vaccinated:{
    type: Boolean,
    required: [true, 'is your pat Vaccinated?']
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: [true, 'Enter Gender!']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Catgeory',
    default: null,
    required: [true, 'Enter category!']
  },
  Breed:{
    type: String,
  },
  Origin:{
    type: String,
  },
  Age:{
    type: Number,
  },
  Weight:{
    type: Number,
  },
  Description:{
    type: String,
  },
  Disease:{
    type: String,
  },
  isCondition:{
    type: Boolean,
  },
  Condition:{
    type: String,
  },
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



const AdoptionPost = mongoose.model('AdoptionPost', adoptionPostSchema);

module.exports = AdoptionPost ;
