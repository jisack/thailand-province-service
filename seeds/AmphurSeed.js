const amphurs = require('../data/amphurs');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('amhpurs').del()
    .then(() => {
      return amphurs.map(data => {
        return {
          id: data.amphur_id,
          province_id: data.province_id,
          name: data.name_th,
          name_eng: data.name_eng
        }
      }).then(data => {
        console.log(data)
        // Inserts seed entries
        // return knex('amhpurs').insert(amphurs_data);
      })

    });
};