const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');
const { Schema } = moongoose;

const membersSchema = moongoose.Schema(
    {
        employename: {
            type: String,
            required: true
        },
        employerole: {
            type: String,
            required: true
        },
        employeemail: {
            type: String,
            required: true,
            unique: true
        }
    }, {
    timestamps: true,
}
)

const ProjectsSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    Projectname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        default: "General"
    },
    progess: {
        type: Number,
        default: 0
    },
    project_members: [membersSchema],

    githublink: {
        type: String
    },
    pro_enddate: {
        type: Date
    },

    // to store update date we can also use timestamp 
    lastpro_updatedate:{
        type: Date,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = moongoose.model('projects', ProjectsSchema);