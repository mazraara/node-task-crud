const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTask = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(200).json({ tasks })
    //res.status(200).json({status: 'success', data: {task, num: task.length}})
    //res.status(200).json({success: true, data: {task, num: task.length}})
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({ task })

})

const getSingleTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No task with the id ; ${taskID}` })
    }
    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
        new: true,
        runValidators: true
    })
    if (!task) {
        return res.status(404).json({ msg: `No task with the id ; ${taskID}` })
    }
    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        return res.status(404).json({ msg: `No task with id: ${taskID}` })
    }
    //res.status(201).json({ task })
    //res.status(201).send()
    res.status(201).json({ task: null, status: 'success' })
})

module.exports = { getAllTask, createTask, getSingleTask, updateTask, deleteTask }