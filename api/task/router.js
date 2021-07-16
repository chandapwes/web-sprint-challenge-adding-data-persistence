// build your `/api/tasks` router here
const express = require('express')

const Task = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Task.get()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const task = await Task.insert(req.body)
        res.json(task)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the task router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router