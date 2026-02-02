const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  name: String,
  title: String,
  bio: String,
  image: String,
  resume: String,
  social: {
    github: String,
    linkedin: String,
    twitter: String,
    email: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('About', aboutSchema);
