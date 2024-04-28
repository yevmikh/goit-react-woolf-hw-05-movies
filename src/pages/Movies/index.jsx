import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getSearchMovie } from '../../services/api';
import MoviesList from '../../components/MoviesList/MoviesList';
import SearchForm from '../../components/SearchForm/SearchForm';
import moduleCss from './movies.module.css';

const Movies = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);

  useEffect(() => {
    const query = new URLSearchParams(location.search).get('query');
    if (!query) return;

    const fetchMovies = async () => {
      const data = await getSearchMovie(query);
      setResults(data.results);
    };

    fetchMovies();
  }, [location.search]);

  return (
    <div className={moduleCss.moviesContainer}>
      <h1>Search movies</h1>
      <SearchForm />
      <MoviesList movies={results} />
    </div>
  );
};

export default Movies;
