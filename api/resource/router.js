// build your `/api/resources` router here
const router = require('express').Router()
const Resource = require('./model')

router.get('/', (req, res, next) => {
    Resource.get()
        .then(resources => {
            res.json(resources)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Resource.insert({ name: req.name })
        .then(newResource => {
            res.status(201).json(newResource)
        })
        .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        customMessage: 'something went wrong inside the resource router',
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router