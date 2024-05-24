const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

// POST route to handle service requests
router.post('/', async (req, res) => {
  const { name, email, serviceType, description } = req.body;
  try {
    const newServiceRequest = new ServiceRequest({ name, email, serviceType, description });
    await newServiceRequest.save();
    res.status(201).json({ message: 'Service request submitted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit service request' });
  }
});

module.exports = router;