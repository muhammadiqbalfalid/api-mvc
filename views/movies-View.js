function renderMoviesList(movies) {
  return `<ul>${movies.map(movie => `<li>${movie.title} ${movie.release_date} ${movie.photo_url}</li>`).join('')}</ul>`;
}

module.exports = {
  renderMoviesList,
};
