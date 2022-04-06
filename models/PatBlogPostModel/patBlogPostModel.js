const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { type } = require('os');

const patBlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Enter pat name!']
  },
  photo: [
    String
  ],
  tags: [
    String
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
    required: [true, 'Enter uder id!']
  },
  Description:{
    type: String,
  },
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});



const PatBlogPost = mongoose.model('PatBlogPost', patBlogPostSchema);

module.exports = PatBlogPost ;
