const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 50
        },
        email: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 255,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
            maxlength: 1024
        }
});

const User = mongoose.model('user', userSchema);

module.exports = User;