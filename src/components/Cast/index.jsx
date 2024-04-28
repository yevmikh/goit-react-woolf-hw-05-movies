import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getCreditsMovie } from '../../services/api';
import moduleCss from './cast.module.css';
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [cast, setCast] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const fetchCast = async () => {
      try {
        const data = await getCreditsMovie(movieId);
        if (data.cast) {
          setCast(data.cast);
        } else {
          setError('No cast information available.');
        }
      } catch (error) {
        console.error('Failed to fetch cast information:', error);
        setError('Failed to fetch cast information.');
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [movieId]);

  const handleGoBack = () => {
    const backLink = location.state?.from || '/';
    navigate(backLink);
  };

  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!cast.length) return <p>No cast information available.</p>;

  return (
    <div>
      <h2>Casting</h2>
      <button onClick={handleGoBack}>Go Back</button>
      <ul className={moduleCss.castGroup}>
        {cast.map(member => (
          <li className={moduleCss.castImage} key={member.cast_id}>
            {member.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                alt={member.name}
              />
            ) : (
              <img
                src="https://via.placeholder.com/185x278?text=No+Image"
                alt="No profile"
              />
            )}
            <div>
              <p className={moduleCss.castText}>{member.name}</p>
              <p className={moduleCss.castText}>as {member.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
