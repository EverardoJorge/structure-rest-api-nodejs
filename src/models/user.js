const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('User', UserSchema);