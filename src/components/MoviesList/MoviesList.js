import React from 'react';

import styles from './moviesList.module.css';

const MoviesList = ({movies}) => {
    return (
        <ul className={styles.moviesList}>
            {movies.map(movie => {
                const backgroundImage = {
                    backgroundImage: `url(${movie.poster})`
                }
                return (
                    <li className={styles.movieCard} key={movie.id}>
                        <div className={styles.moviePoster} style={backgroundImage}>
                            <h3 className={styles.movieTitle}>{movie.title}</h3>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <p className={styles.descriptionText}>Genre: {movie.genre}</p>
                            <p className={styles.descriptionText}>Director: {movie.director}</p>
                            <p className={styles.descriptionText}>Release: {movie.year}</p>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
};

export default MoviesList;