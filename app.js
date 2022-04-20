const connectDb = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasksRoute')
require('dotenv').config() //getting connection string from environment variable


//middlewear

app.use(express.json())

//routes
app.get('/hello', (req, res) =>{
    res.status(200).send('Hello world')
})
app.use('/api/v1/tasks',tasks)

 
const port = 3000

//method to check for connection to mongoDb before starting server
const start = async () => {
    try{
        await connectDb(process.env.MONGO_URI) // using connection string for env file
        app.listen(port, console.log(`Server is listening on port: ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()