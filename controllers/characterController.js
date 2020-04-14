Character = require('../models/character');


// Get all Characters
exports.view = async function (req, res) {
    Character.get((err, characters) => {
        if(err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: characters
        });
    })
};

// Get Character by ID
exports.index = (req, res) => {
    Character.findById(req.params.character_id, (err, character) => {
        if(err) {
            res.send(err);
        };

        res.json({
            data: character
        });
    })
};


// Create new Character
exports.new = function (req, res) {
    let character = new Character();
    character.firstname = req.body.firstname ? req.body.firstname : character.firstname;
    character.lastname = req.body.lastname ? req.body.lastname : character.lastname;

    character.save(function (err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: 'New character created!',
            data: character
        })
    })
};