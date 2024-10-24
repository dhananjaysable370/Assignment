const express = require('express');
const { createRule } = require('../controllers/ruleEngineController');
const router = express.Router();

router.post('/create', createRule);

module.exports = router;
