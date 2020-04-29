Quote = require('../models/quote');


// Get all Quotes
exports.view = async function (req, res) {
    Quote.find().populate('character').exec((err, quote) => {
        if(err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: quote
        });
    });
};


// Get random Character
exports.random = (req, res) => {
    Quote.findOneRandom((err, quote) => {
        if (err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: quote
        });
    });
};

// Get Character by ID
exports.index = (req, res) => {
    Quote.findById(req.params.quote_id, (err, quote) => {
        if(err) {
            res.send(err);
        };

        res.json({
            data: quote
        });
    })
};


// Create new Character
exports.new = function (req, res) {
    let quote = new Quote();
    quote.content = req.body.content ? req.body.content : quote.content;
    quote.character = req.body.character ? req.body.character : character.character;

    quote.save(function (err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: 'New quote created!',
            data: quote
        })
    })
};
