
exports.up = async function(knex) {
  await knex.schema
    .createTable('project', table => {
        table.increments('project_id')
        table.string('project_name').notNullable().unique()
        table.string('project_description')
        table.integer('project_completed', 0)
    })
    .createTable('resource', table => {
        table.increments('resource_id')
        table.string('resource_name').notNullable().unique()
        table.string('resource_description')
    })
    .createTable('task', table => {
        table.increments('task_id')
        table.string('task_description').notNullable()
        table.string('task_notes')
        table.integer('task_completed', 0)
        table.integer('project_id').notNullable().references('project')
    })
    .createTable('project_resources', table => {
        table.increments('project_resources')
    })
};

exports.down = async function(knex) {
  await knex.schema
    .dropTableIfExists('project')
    .dropTableIfExists('resource')
    .dropTableIfExists('task')
    .dropTableIfExists('project_resources')
};
