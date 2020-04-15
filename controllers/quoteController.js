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

//
// // Get random Character
// exports.random = (req, res) => {
//     Character.findOneRandom((err, character) => {
//         if (err) {
//             res.json({
//                 status: "err",
//                 message: err
//             });
//         }
//         res.json({
//             data: character
//         });
//     });
// };
//
// // Get Character by ID
// exports.index = (req, res) => {
//     Character.findById(req.params.character_id, (err, character) => {
//         if(err) {
//             res.send(err);
//         };
//
//         res.json({
//             data: character
//         });
//     })
// };


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
