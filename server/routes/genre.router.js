const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");

// router.get("/", (req, res) => {
//   // Add query to get all genres

//   const query = `SELECT * FROM genres ORDER BY "name" ASC`;
//   pool
//     .query(query)
//     .then((result) => {
//       res.send(result.rows);
//     })
//     .catch((err) => {
//       console.log("ERROR: Get all genres", err);
//       res.sendStatus(500);
//     });
// });

router.get("/", (req, res) => {
  // needs to send over name of genre clicked
  console.log(req.params);
  const genreQuery = `
  SELECT * FROM "movies"
JOIN "movies_genres"
  ON  "movies_genres"."movie_id" =  "movies"."id"
JOIN "genres" 
  ON "movies_genres"."genre_id"  = "genres"."id"
WHERE "genres"."name" = $1;
  `;
  const genreparams = [];
});

module.exports = router;
