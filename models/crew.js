const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

// Character Schema

const CrewSchema = mongoose.Schema({
    name: {
        type: String
    },
    role: {
        type: String
    }
});

CrewSchema.plugin(random);

const Crew = module.exports = mongoose.model('crew', CrewSchema);

module.exports.get = (callback, limit) => {
    Crew.find(callback).limit(limit);
};
