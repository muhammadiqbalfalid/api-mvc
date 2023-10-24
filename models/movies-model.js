const db = require('../config/config'); // Impor koneksi database dari config.js

function getAllMovies() {
  return db.any('SELECT * FROM movies');
}

function createMovie(movie) {
  return db.one('INSERT INTO movies(title, release_date, photo_url) VALUES($1, $2, $3) RETURNING *', [
    movie.title,
    movie.release_date,
    movie.photo_url,
  ]);
}

module.exports = {
  getAllMovies,
  createMovie,
};
