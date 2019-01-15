const passport = require('passport');
const User = require('../models/users');

passport.use (
    new User ({
        username: profile.displayName,
    }).save().then((newUser)) => {
        console.log('new user created: ' + newUser)
    }
)