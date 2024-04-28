import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewMovie } from '../../services/api';
import moduleCss from './reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!movieId) return;

    const fetchReviews = async () => {
      setLoading(true);
      try {
        const { results } = await getReviewMovie(movieId);
        if (results.length > 0) {
          setReviews(results);
        } else {
          setError('No reviews available.');
        }
      } catch (error) {
        console.error('Failed to fetch reviews:', error);
        setError('Failed to fetch reviews.');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);


  if (isLoading) return <Loader />;
  if (error) return <p>{error}</p>;
  if (!reviews.length) return <p>No reviews available.</p>;

  return (
    <div className={moduleCss.reviewsContainer}>
      <h2>Reviews</h2>
      <ul className={moduleCss.reviewsGroup}>
        {reviews.map(review => (
          <li className={moduleCss.reviewsText} key={review.id}>
            <strong>{review.author}</strong>: {review.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
