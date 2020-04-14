// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Is Working',
        message: 'Welcome to the OfficeApi! Try hitting the following endpoints: /episodes, /characters or /episodes'
    });
});

const characterController = require('../controllers/characterController');
const episodeController = require('../controllers/episodeController');


// Character Routes

router.route('/characters')
    .get(characterController.view)
    .post(characterController.new);

router.route('/characters/:character_id')
    .get(characterController.index);


// Episode Routes

router.route('/episodes')
    .get(episodeController.view)
    .post(episodeController.new);

// Quote Routes



// Export API routes
module.exports = router;