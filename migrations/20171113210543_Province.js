exports.up = function (knex, Promise) {
    return knex.schema.createTable('provinces', (provinceTable) => {
        provinceTable.interger('id').notNullable();
        provinceTable.string('name').notNullable();
        provinceTable.string('name_eng').notNullable();
    }).then(() => {

    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('provinces');
};