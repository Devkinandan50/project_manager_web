const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/projectTracker";

const connectToMongo = () =>{
    mongoose.connect(mongoURL, ()=>{
        console.log("connected");
    })
}

module.exports = connectToMongo;