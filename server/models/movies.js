const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    title: String,
    unique: true,
},
    allSeats: String,
    selectedSeats: String,
    days: Array,
    times: Array,
});

const Movie = mongoose.model('movie', userSchema);

module.exports = User;