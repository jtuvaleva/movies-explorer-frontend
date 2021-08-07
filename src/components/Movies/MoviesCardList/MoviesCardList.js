import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import SavedMovieCard from '../SavedMovieCard/SavedMovieCard';

function MoviesCardList({openedAllMovies}) {
    
    return (
        <ul className="movies-grid">
            {(openedAllMovies)?(
                <MoviesCard/>
            ):(
                <SavedMovieCard/>
            )}
            
        </ul>
    )
};

export default MoviesCardList;
