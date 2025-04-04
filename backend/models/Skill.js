const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model('Skill', skillSchema);