const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/projectTracker";



const connectToMongo = () =>{
    mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(()=>{
        console.log("connected");
    })
    .catch((err) => console.log("it has an error", err));
}

module.exports = connectToMongo;