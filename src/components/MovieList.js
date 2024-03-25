import React from 'react';
import Movie from './Movie'; // Import the Movie component

function MovieList({ movies }) {
  return (
    <div>
      {/* Render each movie using the Movie component */}
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          synopsis={movie.synopsis}
          rating={movie.rating}
          image={movie.image} // Pass the image prop
        />
      ))}
    </div>
  );
}

export default MovieList;
