const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const keys = require('./config/keys');
const routes = require('./routes/api');
const port = process.env.PORT || 5000;
const fetch = require('node-fetch');
const api_key = "896b160ed1c39f3b9471c1b72df80de9";
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', routes);
// Getting movie premieres from API
fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1&region=pl`)
.then(response => response.json())
.then(json => console.log(json));

//connect to mlab
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mlab');
});

//connect to mongodb
mongoose.connect('mongodb://localhost/cinemas')
mongoose.Promise = global.Promise;

app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});


app.listen(port, () => console.log(`Listening on port ${port}`));