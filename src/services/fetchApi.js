import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '0f593a0454339471521d6a9985cd9e6b';

export const fetchApi = {
  getTrendingMovies: () => {
    return axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  },

  searchMovies: query => {
    return axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  },

  getMovieDetails: movieId => {
    return axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  },

  getMovieCast: movieId => {
    return axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  },

  getMovieReviews: movieId => {
    return axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  },
};
