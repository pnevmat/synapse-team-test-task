import React from 'react';

import Header from '../../components/Header/Header';
import MoviesList from '../../components/MoviesList/MoviesList';

import imdbMovies from '../../utils/imdb.json';

const MoviesPage = () => {

    return (
        <>
            <Header />
            <MoviesList imdbMovies={imdbMovies} />
        </>
    );
};

export default MoviesPage;