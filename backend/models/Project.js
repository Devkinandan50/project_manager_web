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

const taskSchema = mongoose.Schema({
    taskname: {
        type: String,
        required: true
    },
    taskdescription:{
        type: String
    },
    task_assignto:{
        type: String,
        required: true
    },
    task_status:{
        type: String,
        default: "remaining" 
    }
})

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
        default: "null"
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
    project_tasks: [taskSchema],

    githublink: {
        type: String,
        default: "null"
    },
    pro_enddate: {
        type: Date,
        required: true
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