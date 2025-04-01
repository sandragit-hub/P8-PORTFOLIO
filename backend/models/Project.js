const mongoose = require('mongoose');

const projetSchema = mongoose.Schema({
    title: { type: String, required: true },
    descriptionCard: { type: String, required: true },
    descriptionModal: { type: String, required: true },
    image: { type: String, required: true },
    tag: { type: [String], required: true }
});

module.exports = mongoose.model('Project', projetSchema);