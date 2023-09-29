// STRETCH
const cars = [
    {
        vin: '1G8ZG5284TZ315929',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: 'WDDGF4HB1DR252311',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',
    },
    {
        vin: '1G6KS52Y4TU846196',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}