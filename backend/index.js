const connectToMongo = require('./db');
const express = require('express');

connectToMongo();

const app = express()
const port = 5000

// app.get('/', (req, res) => {
//     res.send('hello kaka')
// })


app.use(express.json())
app.use('/api/auth', require('./routers/auth'))
app.use('/api/notes', require('./routers/notes'))

app.listen(port, ()=>{
    console.log(`he ${port}`)
})