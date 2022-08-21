movie.id instead of i

SELECT 
movies.*
array_agg(to_jason(genres)) AS genres
FROM movies
Join movies_genres
    ON movies_genres.movie_id = movies.id
Join genres
    on movies_genres.genres_id = genres.id
WHERE movies.id = $1
GROUP BY movies.id;