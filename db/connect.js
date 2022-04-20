const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://staann:_Staann_01@nodeexpressproject.k1k5s.mongodb.net/TaskManager?retryWrites=true&w=majority'

const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}    

module.exports = connectDb