Episode = require('../models/episode');


// Get all Episodes
exports.view = async function (req, res) {
    Episode.find().populate('writer').populate('director').exec((err, episode) => {
        if(err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: episode
        });
    });
};

// Get Episode by ID
exports.index = (req, res) => {
    Episode.findById(req.params.episode_id, (err, episodes) => {
        if(err) {
            res.send(err);
        };

        res.json({
            data: episodes
        });
    })
};


// Get random Episode
exports.random = (req, res) => {
    Episode.findOneRandom((err, episode) => {
        if (err) {
            res.json({
                status: "err",
                message: err
            });
        }
        res.json({
            data: episode
        });
    });
};


// Create new Character
exports.new = function (req, res) {
    let episode = new Episode();
    episode.title = req.body.title ? req.body.title : episode.title;
    episode.description = req.body.description ? req.body.description : episode.description;
    episode.writer = req.body.writer ? req.body.writer : episode.writer;
    episode.director = req.body.director ? req.body.director : episode.director;
    episode.airDate = req.body.airDate ? req.body.airDate : episode.airDate;

    episode.save(function (err) {
        if(err) {
            res.json(err);
        }
        res.json({
            message: 'New episode created!',
            data: episode
        })
    })
};
