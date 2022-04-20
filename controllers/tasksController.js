

const getAllTask = (req, res) => {
    res.send('All Items')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getSingleTask = (req, res) => {
    res.json({id : req.params.id })
}

const updateTask = (req, res) => {
    res.send('Update task with id')
}

const deleteTask = (req, res) => {
    res.send('Delete tasks with id')
}

module.exports = { getAllTask, createTask, getSingleTask, updateTask, deleteTask }