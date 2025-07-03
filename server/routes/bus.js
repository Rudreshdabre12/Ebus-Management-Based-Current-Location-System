const express = require('express');
const router = express.Router();

// Placeholder: Get all buses
router.get('/', (req, res) => {
  res.send('Get all buses');
});

// Placeholder: Create a bus
router.post('/', (req, res) => {
  res.send('Create bus');
});

// Placeholder: Update a bus
router.put('/:id', (req, res) => {
  res.send('Update bus');
});

// Placeholder: Delete a bus
router.delete('/:id', (req, res) => {
  res.send('Delete bus');
});

module.exports = router;
