Crew = require('../models/crew');


// Get all Characters
exports.view = async function (req, res) {
    Crew.get((err, crew) => {
        if(err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: crew
        });
    })
};


// Get random Character
exports.random = (req, res) => {
    Crew.findOneRandom((err, crew) => {
        if (err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: crew
        });
    });
};

// Get Character by ID
exports.index = (req, res) => {
    Crew.findById(req.params.crew_id, (err, crew) => {
        if(err) {
            res.send(err);
        };

        res.json({
            data: crew
        });
    })
};


// Create new Character
exports.new = function (req, res) {
    let crew = new Crew();
    crew.name = req.body.name ? req.body.name : crew.name;
    crew.role = req.body.role ? req.body.role : crew.role;

    crew.save(function (err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: 'New crew member created!',
            data: crew
        })
    })
};
