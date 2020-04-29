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
const crewController = require('../controllers/crewController');
const episodeController = require('../controllers/episodeController');
const quoteController = require('../controllers/quoteController');


// Character Routes
router.route('/characters')
    .get(characterController.view)
    .post(characterController.new);

router.route('/characters/random')
    .get(characterController.random);

router.route('/characters/:character_id')
    .get(characterController.index);


// Crew Routes
router.route('/crew')
    .get(crewController.view)
    .post(crewController.new);

router.route('/crew/random')
    .get(crewController.random);

router.route('/crew/:crew_id')
    .get(crewController.index);



// Episode Routes
router.route('/episodes')
    .get(episodeController.view)
    .post(episodeController.new);

router.route('/episodes/random')
    .get(episodeController.random);


// Quote Routes
router.route('/quotes')
    .get(quoteController.view)
    .post(quoteController.new);

router.route('/quotes/random')
    .get(quoteController.random);

router.route('/quotes/:quote_id')
    .get(quoteController.index);




// Export API routes
module.exports = router;
