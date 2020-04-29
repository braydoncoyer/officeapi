const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

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

EpisodeSchema.plugin(random);

const Episode = module.exports = mongoose.model('episode', EpisodeSchema);

module.exports.get = (callback, limit) => {
    Episode.find(callback).limit(limit);
};
