import React, { useEffect, useState } from 'react';
import { getTrandingMovie } from '../../services/api';
import { Link } from 'react-router-dom';
import moduleCss from './home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrandingMovie();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  return (
    <div className={moduleCss.homeBig}>
      <h1>Popular</h1>
      <div className={moduleCss.homeContainer}>
        {movies.map(movie => (
          <Link
            key={movie.id}
            to={`/movies/${movie.id}`}
            className={moduleCss.homeItem}
          >
            <img
              className={moduleCss.homeImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className={moduleCss.homeMovieName}>
              <h3>{movie.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
