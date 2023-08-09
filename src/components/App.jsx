import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingSpinner from './Loading/LoadingSpinner';
import Layout from './Layout/Layout';

const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));


export const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/movies/:movieId" element={<MovieDetails />} />
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
};
