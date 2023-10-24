const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/movies-controller');

router.get('/', moviesController.getMovies);
router.post('/', moviesController.createMovie);

module.exports = router;
