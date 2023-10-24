const moviesModel = require('../models/movies-model');
const moviesView = require('../views/movies-View');

async function getMovies(req, res) {
  try {
    const movies = await moviesModel.getAllMovies();
    const renderedMovies = moviesView.renderMoviesList(movies);
    res.send(renderedMovies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal mengambil data film.' });
  }
}

async function createMovie(req, res) {
  try {
    const movie = req.body; // Misalnya, data film yang dikirim melalui form
    const newMovie = await moviesModel.createMovie(movie);
    res.json(newMovie);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Gagal menambahkan film.' });
  }
}

module.exports = {
  getMovies,
  createMovie,
};
