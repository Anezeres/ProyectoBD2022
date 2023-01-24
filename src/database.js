const { Pool } = require('pg');

const config = {
    user: 'postgres',
    host: 'localhost',
    password: '',
    database: 'memmo'
};

const pool = new Pool(config);

const getUsuarios = async () => {
    console.log('Listando usuarios: ');
    const res =  await pool.query('SELECT * FROM usuarios');
    console.log(res); // Esto devuelve un objeto con bastante información
    console.log(res.rows); // Esto me devuelve solo las filas de la base de datos.
};

getUsuarios();


