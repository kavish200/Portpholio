const express = require('express');
const router = express.Router();
const About = require('../models/About');

// Get about
router.get('/', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create({
        name: 'Your Name',
        title: 'Student Developer',
        bio: 'Passionate about building amazing web applications',
      });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update about
router.patch('/', async (req, res) => {
  try {
    let about = await About.findOne();
    if (!about) {
      about = await About.create(req.body);
    } else {
      Object.assign(about, req.body);
      about = await about.save();
    }
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
