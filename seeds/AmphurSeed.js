const amphurs = require('../data/amphurs');

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('amphurs').del()
    .then(() => {
      const amphurs_data = amphurs.map(data => {
        return {
          id: data.amphur_id,
          province_id: data.province_id,
          name: data.name_th,
          name_eng: data.name_eng
        }
      })
      // console.log(amhpurs)
      // Inserts seed entries
      return knex('amhpurs').insert(amphurs_data);

    }).then(result => {
      console.log('amphurs seed success')
    }).catch(err => {
      console.log('amphurs seed failed')
    });
};