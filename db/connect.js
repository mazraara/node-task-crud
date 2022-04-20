//setting up mongodb connection using mongoose

const mongoose = require('mongoose')

const connectDb = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
}    

//export connection method to be used in the app.js file
module.exports = connectDb  