const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database');

const app = express();
const apiRoutes = require('./routes/api-routes');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

// Configure DB
mongoose.connect(config.database, {
    dbName: 'test',
    user: 'braydon123',
    pass: 'braydon123',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Connect to DB
mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

// If there is a DB error
mongoose.connection.on('error', (err) => {
    console.log(`Database error: ${err}`);
});

const db = mongoose.connection;


// Enable CORS Middleware
app.use(cors());


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Define base url
app.get('/', (req, res) => {
    res.send('Invalid Enpoint!');
});

// // Define base url
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Use API routes
app.use('/api', apiRoutes);


// Listen on the port defined
app.listen(port, () => {
    console.log('Server is running on port ' + port);
});
