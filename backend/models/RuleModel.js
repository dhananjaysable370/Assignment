const mongoose = require('mongoose');

const RuleSchema = new mongoose.Schema({
    ast: { type: Object, required: true },
});

module.exports = mongoose.model('Rule', RuleSchema);
