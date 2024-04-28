import React, { useEffect, useState } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { getDetailsMovie } from '../../services/api';
import RatingCircle from 'components/RatingCircle/RatingCircle';
import moduleCss from './movieDetails.module.css';
import Loader from 'components/Loader/Loader';

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const fetchMovieDetails = async () => {
      try {
        const data = await getDetailsMovie(movieId);
        if (data) {
          setMovie(data);
        } else {
          setError('No movie details available.');
        }
      } catch (error) {
        console.error('Failed to fetch movie details:', error);
        setError('Failed to fetch movie details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    const backLink = location.state?.from || '/';
    navigate(backLink);
  };

  if (isLoading) return <Loader />;
  if (error) return <div>{error}</div>;
  if (!movie) return <Loader />;

  const defaultImg =
    'https://glavcom.ua/img/article/9139/95_main-v1678685008.jpg';

  return (
    <div className={moduleCss.MovieDetailsBig}>
      <button className={moduleCss.MovieDetailsButton} onClick={handleGoBack}>
        Go Back
      </button>
      <div>
        <div className={moduleCss.MovieDetailsContainer}>
          <img
            className={moduleCss.MovieDetailsImage}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                : defaultImg
            }
            alt={movie.title}
          />
          <div className={moduleCss.MovieDetailsContent}>
            <h1>{movie.title}</h1>
            <p className={moduleCss.MovieDetailsText}>{movie.overview}</p>
            <p className={moduleCss.MovieDetailsText}>
              <strong>Genres:</strong>{' '}
              {movie.genres.map(genre => genre.name).join(', ')}
            </p>
            <p className={moduleCss.MovieDetailsText}>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <div>
              <RatingCircle rating={movie.vote_average} />
            </div>
            <div className={moduleCss.MovieDetailsButtonGroup}>
              <Link
                className={moduleCss.MovieDetailsButton}
                to={`/movies/${movieId}/cast`}
                state={{ from: location.state?.from || '/' }}
              >
                Cast
              </Link>
              <Link
                className={moduleCss.MovieDetailsButton}
                to={`/movies/${movieId}/reviews`}
                state={{ from: location.state?.from || '/' }}
              >
                Reviews
              </Link>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
