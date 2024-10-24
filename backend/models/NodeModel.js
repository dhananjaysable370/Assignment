const mongoose = require('mongoose');

const NodeSchema = new mongoose.Schema({
    type: { type: String, required: true },
    left: { type: Object, default: null },
    right: { type: Object, default: null },
    value: { type: String, default: null }
});

module.exports = mongoose.model('Node', NodeSchema);
