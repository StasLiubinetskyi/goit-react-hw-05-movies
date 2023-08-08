import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';
import {
  Container,
  ReviewList,
  ReviewItem,
  Author,
  Content,
} from './ReviewsStyled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchApi
      .getMovieReviews(movieId)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, [movieId]);

  return (
    <Container>
      {reviews.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        <ReviewList>
          {reviews.map(review => (
            <ReviewItem key={review.id}>
              <Author>{review.author}</Author>
              <Content>{review.content}</Content>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
    </Container>
  );
};

export default Reviews;
