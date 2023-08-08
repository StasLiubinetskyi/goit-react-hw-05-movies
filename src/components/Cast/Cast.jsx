import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from '../../services/fetchApi';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchApi
      .getMovieCast(movieId)
      .then(response => {
        setCast(response.data.cast);
      })
      .catch(error => {
        console.error('Error fetching cast:', error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
            />{' '}
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
