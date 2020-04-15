const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

// Character Schema

const CharacterSchema = mongoose.Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    }
});

CharacterSchema.plugin(random);

const Character = module.exports = mongoose.model('character', CharacterSchema);

module.exports.get = (callback, limit) => {
    Character.find(callback).limit(limit);
};
