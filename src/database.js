const { Pool } = require('pg');

const config = {
    user: 'ebjtbucz',
    host: 'kandula.db.elephantsql.com',
    password: 'VMdYBotsBATUqhS1y3jDCqJ5nrFab7On',
    database: 'ebjtbucz'
};

const pool = new Pool(config);

const getUsuarios = async () => {
    try {
        console.log('Listando usuarios: ');
        const res =  await pool.query('SELECT * FROM clientas');
        res.status(200).json(res.rows);
        ///console.log(res); // Esto devuelve un objeto con bastante información
        //console.log(res.rows); // Esto me devuelve solo las filas de la base de datos.

    } catch (e) {
        console.log(e);
    }

};

const insertUser = async () => {
    try {
        const consultaInicial = 'INSERT INTO usuarios(nombre, direccion, email, telefono, recibo, metodoPago)';
        const textValores = 'VALUES ($1, $2, $3, $4, $5, $6)';
        const consulta = consultaInicial + textValores;
        const valores = ['Julian', 'Cra 41 Sur #20c34','alvarez.julian@correounivalle.edu.co','3106593455','sadasdasd','Credito'];
    
        const res = await pool.query(consulta, valores);

        console.log(res);
    } catch (e) {
        console.log(e);
    }
};

const deleteUser = async () => {
    const text = 'DELETE FROM usuarios WHERE nombre = $1';
    const valores = ['Julian'];

    const res = await pool.query(text,valores);
    console.log(res);
};

const editUser = async () => {
    const text = 'UPDATE usuarios SET nombre = $1 WHERE nombre = $2';
    const valores = ['Marino', 'Julian'];
    const res = await pool.query(text,valores);
    console.log(res);
};

module.exports = {
    getUsuarios
}

getUsuarios(); // Así se realiza la consulta


