const connectDb = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasksRoute')


//middlewear

app.use(express.json())

//routes
app.get('/hello', (req, res) =>{
    res.status(200).send('Hello world')
})

app.use('/api/v1/tasks',tasks)

 


const port = 3000
const start = async () => {
    try{
        await connectDb()
        app.listen(port, console.log(`Server is listening on port: ${port}`))
    }catch(error){
        console.log(error)
    }
}

start()