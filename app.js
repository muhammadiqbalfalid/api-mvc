const express = require('express');
const app = express();
const moviesRoutes = require('./routes/movies-routes');

app.use(express.json());

app.use('/movies', moviesRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
