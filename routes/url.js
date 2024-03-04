const express = require('express');
const { handleGenerateNewShortURL } = require('../controllers/url');

const router = express.Router();

// Define route for handling POST requests to '/'
router.post('/', handleGenerateNewShortURL);

module.exports = router; 
