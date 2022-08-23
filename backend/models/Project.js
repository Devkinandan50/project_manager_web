const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const { Schema } = moongoose;

const ProjectsSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Projectname:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    tag:{
        type: String,
        default: "General"
    },
    progess:{
        type: Number,
        default: 0
    },
    githublink:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    },
})

module.exports = moongoose.model('projects', ProjectsSchema);