const { Pool } = require('pg');
const pool = new Pool({
    database: 'cows'
})

const getAllCows = () => {
    return pool.query('SELECT * FROM cow')
        .then(res => {
            console.log(res.rows);
            return res.rows;
        })
};

const getCow = (cow) => {
    let values = [cow]
    return pool.query(`SELECT * FROM cow WHERE $1 = cow_name`, values)
        .then(res => res.rows)
};

const addACow = (cow) => {
    let values = [cow.name, cow.description]
    return pool.query('INSERT INTO cow(cow_name, cow_description) VALUES($1, $2)', values)
        .then(() => true)
}

module.exports = {
    getAllCows,
    getCow,
    addACow
}