import React, { useEffect, useState } from 'react';
import { getTrandingMovie } from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
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
        <MoviesList movies={movies} />
      </div>
    </div>
  );
};

export default Home;
