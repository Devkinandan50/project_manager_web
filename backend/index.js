const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
// express middlewares for parsing text, JSON, url-encoded and raw data set
const bodyParser = require("body-parser");

connectToMongo();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//     res.send('hello kaka')
// })

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(express.json())


app.use('/api/auth', require('./routers/auth'))
app.use('/api/projects', require('./routers/projects'))

app.listen(port, ()=>{
    console.log(`he ${port}`)
})