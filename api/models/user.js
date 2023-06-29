const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

const userModel = model('User', userSchema);

module.exports = userModel; 