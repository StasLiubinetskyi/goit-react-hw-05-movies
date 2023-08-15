import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingSpinner from './Loading/LoadingSpinner';

const Layout = React.lazy(() => import('./Layout/Layout'));
const Home = React.lazy(() => import('./Home/Home'));
const Movies = React.lazy(() => import('./Movies/Movies'));
const MovieDetails = React.lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('./Cast/Cast'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));
const NotFound = React.lazy(() => import('./NotFound/NotFound'));

export const App = () => {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Suspense>
    </div>
  );
};
