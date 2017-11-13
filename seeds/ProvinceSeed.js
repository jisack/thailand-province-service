const provinces = require('../data/provinces');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('provinces').del()
    .then(() => {
      return provinces.map(data => {
        return {
          id: data.code,
          name: data.name_th,
          name_eng: data.name_eng
        }
      }).then(data => {
        console.log(data)
        // Inserts seed entries
        // return knex('provinces').insert(amphurs_data);
      })

    });
};