const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: String,
    unique: true,
    allSeats: String,
    selectedSeats: String,
    days: Array,
    times: Array,
}
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;