const moongoose = require('mongoose');
const { Schema } = moongoose;

const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = moongoose.model('user', UserSchema);