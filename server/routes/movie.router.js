const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')
// Gets a api/movie
// returns a list of movies
router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});
// EDANS WAY
//GET /api/movie/:id
// return a single movie

/*
route.get(/:id , (re,res) => {
  console.log(${req.params.id})
  res.send('id')

  const sqlQuery = `
  SELECT * 
  FROM movies
  WHERE id = $1`;

  const sqlParams = [req.params.id];

  pool.query(sqlQuery,sqlParams)
  .then((dbRes) => {
    log(dbRes.rows[0]);
    if (dbRes === 0 ){
      res.sendStatus(404);
      return;
    }
    res.send(dbRes.rows[0]);
  })
  .catch((err) => {
    log (`uh oh there is a error ${err}`);
  })
}
)

*/


router.post('/', (req, res) => {
  console.log(req.body);
  // RETURNING "id" will give us back the id of the created movie
  const insertMovieQuery = `
  INSERT INTO "movies" ("title", "poster", "description")
  VALUES ($1, $2, $3)
  RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
  pool.query(insertMovieQuery, [req.body.title, req.body.poster, req.body.description])
  .then(result => {
    console.log('New Movie Id:', result.rows[0].id); //ID IS HERE!
    
    const createdMovieId = result.rows[0].id

    // Now handle the genre reference
    const insertMovieGenreQuery = `
      INSERT INTO "movies_genres" ("movie_id", "genre_id")
      VALUES  ($1, $2);
      `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
      pool.query(insertMovieGenreQuery, [createdMovieId, req.body.genre_id]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
      }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
      })

// Catch for first query
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
})

module.exports = router;