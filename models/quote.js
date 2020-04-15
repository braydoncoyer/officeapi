// import * as Schema from "mongoose";

const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

// Quote Schema

const QuoteSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    character: {
        type: mongoose.Schema.Types.ObjectId, ref: 'character',
        required: true
    }
});

QuoteSchema.plugin(random);

const Quote = module.exports = mongoose.model('quote', QuoteSchema);

module.exports.get = (callback, limit) => {
    Quote.find(callback).limit(limit);
};
