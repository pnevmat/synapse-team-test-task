import React, {useState} from 'react';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';

import styles from './moviesList.module.css';

const MoviesList = ({imdbMovies}) => {

    const [moviesPerPage, setMoviesPerPage] = useState(20);

    const movies = imdbMovies.filter((movie, index) => index <= moviesPerPage - 1 && movie);

    const handleScroll = () => {
        setMoviesPerPage(moviesPerPage + 20);
    }

    return (
        <ul className={styles.moviesList} onWheel={e => {
            e.preventDefault();
            return e.pageY >= e.target.scrollHeight - 300 && moviesPerPage <= imdbMovies.length && handleScroll()
            }}>
            {movies.map(movie => {
                
                const backgroundImage = {
                    backgroundImage: `url(${movie.poster})`
                }

                const svgFill = {
                    fill: '#ffffff'
                }

                return (
                    <li className={styles.movieCard} key={movie.id}>
                        <div className={styles.moviePoster} style={backgroundImage}>
                            <h3 className={styles.movieTitle}>{movie.title}</h3>
                            <div>
                                {Number(movie.imdbrating) < 8 && <ThumbDownAltOutlinedIcon className={styles.downthumbIcon} style={svgFill} />}
                                <InfoOutlinedIcon className={styles.infoIcon} style={svgFill} />
                                <div className={styles.infoPopup}>
                                    <p className={styles.infoText}>Writer: {movie.writer}</p>
                                    <p className={styles.infoText}>Actors: {movie.actors}</p>
                                    <p className={styles.infoText}>Rating: {movie.imdbrating}</p>
                                    <p className={styles.infoText}>Plot: {movie.plot}</p>
                                </div>
                            </div>
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