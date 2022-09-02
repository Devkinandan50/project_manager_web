const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');

connectToMongo();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//     res.send('hello kaka')
// })

app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use('/api/auth', require('./routers/auth'))
app.use('/api/projects', require('./routers/projects'))

app.listen(port, ()=>{
    console.log(`he ${port}`)
})