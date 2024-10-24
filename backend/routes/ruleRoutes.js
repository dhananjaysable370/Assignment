const express = require('express');
const { createRule } = require('../controllers/ruleEngineController');
const router = express.Router();

// Ensure this POST route exists
router.post('/create', createRule);

module.exports = router;
