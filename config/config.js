const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',      // Ganti dengan alamat host database Anda
    port: '5432',             // Port database PostgreSQL (biasanya 5432)
    database: 'movies', // Nama basis data PostgreSQL yang digunakan
    user: 'postgres',   // Nama pengguna PostgreSQL
    password: 'bale123'  // Kata sandi PostgreSQL
});

module.exports = db;
