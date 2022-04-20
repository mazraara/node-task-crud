const mongoose = require('mongoose');


const TaskSchema = mongoose.Schema({

    //Adding built in validation to schema - check mongoose doc for more info
    name: {
        type:String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'name can not exceed 20 characters']
    }, 
    completed:{
        type:Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema)