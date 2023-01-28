const mongoose = require('mongoose');
const mongoURL = "mongodb://localhost:27017/projectTracker";
// const mongoURL = process.env.DATABASE;

// const connectToMongo = () =>{
//     mongoose.connect(mongoURL, ()=>{
//         console.log("connected");
//     })
// }

const connectToMongo = () => {
    mongoose.connect(mongoURL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => console.log("DataBase Connected")).catch((err) => {
        console.log(err);
    })
}

module.exports = connectToMongo;