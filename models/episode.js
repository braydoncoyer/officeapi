const mongoose = require('mongoose');

// Episode Schema
const EpisodeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    writer: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    airDate: {
        type: Date,
        required: true
    }
});

const Episode = module.exports = mongoose.model('episode', EpisodeSchema);

module.exports.get = (callback, limit) => {
    Episode.find(callback).limit(limit);
};
