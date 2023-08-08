import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetchApi
      .getMovieDetails(movieId)
      .then(response => {
        setMovieDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [movieId]);

  const compilePosterURL = path => {
    return path
      ? `https://image.tmdb.org/t/p/w500${path}`
      : 'https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg';
  };

  return (
    <div>
      <h2>Movie Details</h2>
      <Link to="/movies">Go back</Link> <h3>{movieDetails.title}</h3>
      <img
        src={compilePosterURL(movieDetails.poster_path)}
        alt={movieDetails.title}
      />
      <p>{movieDetails.overview}</p>
    </div>
  );
};

export default MovieDetails;
