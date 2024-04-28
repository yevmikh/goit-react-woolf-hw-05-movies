import React from 'react';
import { Link } from 'react-router-dom';
import moduleCss from './moviesList.module.css';

const defaultImg =
  'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

const MoviesList = ({ movies }) => {
  return (
    <div className={moduleCss.moviesContainer}>
      {movies.map(movie => (
        <Link
          to={`/movies/${movie.id}`}
          className={moduleCss.movieListItem}
          key={movie.id}
        >
          <img
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
            className={moduleCss.movieListImage}
          />
          <div className={moduleCss.movieListName}>
            <h3>{movie.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesList;
