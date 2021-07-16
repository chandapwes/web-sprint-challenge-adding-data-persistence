// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    get,
    getById,
    insert,
}

function get() {
    return db('resources')
}

function getById(id) {
    return db('resources')
        .where({ id })
        .first()
}

function insert(resource) {
    return db('resource')
    .insert(resource)
    .then(ids => {
        return getById(ids[0])
    })
}