// build your `/api/projects` router here
const express = require('express')

const Project = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const projects = await Project.get()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try{
        const project = await Project.insert(req.body)
        res.json(project)
    } catch (err) {
        next(err)
    }
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the project router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router