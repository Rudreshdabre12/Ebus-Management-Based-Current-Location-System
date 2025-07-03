const express = require('express');
const router = express.Router();

// Placeholder: Get user profile
router.get('/profile', (req, res) => {
  res.send('User profile endpoint');
});

// Placeholder: Search bus by source/destination
router.get('/search', (req, res) => {
  res.send('Search bus endpoint');
});

module.exports = router;
