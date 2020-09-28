const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const items = require('./routes/api/items');


const app = express();

//bodyparser Middleware
app.use(bodyParser.json());

// DB Configuration
const db = require('./config/keys').mongoURI;

// connect to Mongo
mongoose.connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

    // use routes
app.use('/api/items',items);

// Serve Static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
