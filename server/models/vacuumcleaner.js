const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true},
    brand: { type: String, required: true},
    price: { type: String, required: true},
});

module.exports = mongoose.model("Vacuumcleaner", schema);