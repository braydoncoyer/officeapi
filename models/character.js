const mongoose = require('mongoose');
const config = require('../config/database');

// Character Schema

const CharacterSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
});

const Character = module.exports = mongoose.model('character', CharacterSchema);

module.exports.get = (callback, limit) => {
    Character.find(callback).limit(limit);
};