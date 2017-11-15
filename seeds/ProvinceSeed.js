const provinces = require('../data/provinces');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('provinces').del()
    .then(() => {
      const provinces_data = provinces.map(data => {
        return {
          id: data.code,
          name: data.name_th,
          name_eng: data.name_eng
        }
      })
      // Inserts seed entries
      return knex('provinces').insert(provinces_data);
    }).then(result => {
      console.log('provinces seed success');
    }).catch(err => {
      console.log('provinces seed failed');
    });
};