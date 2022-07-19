// --------------------
// >> Base Variables <<
// --------------------
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const studentsRouter = require('./routes/students');

const app = express();
const port = process.env.PORT || 8080;
// --------------------


// --------------------
// >> Middleware <<
// --------------------
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// --------------------



// --------------------
// >> Routes <<
// --------------------
app.use('/students', studentsRouter);
// --------------------


// --------------------
// >> Connect to database <<
// --------------------
mongoose.connect('mongodb://localhost:27017/students', function(err, db) {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to database!');
    }
})

// >> Port <<
app.listen(port, () => console.log('Listening on port 8080!'));


