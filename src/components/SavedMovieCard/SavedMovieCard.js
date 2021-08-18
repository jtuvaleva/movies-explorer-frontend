import React from 'react';
import './SavedMovieCard.css';
import '../MoviesCard/MoviesCard';

function SavedMoviesCard({movie}) {
    
    return (
        <li className="movies-card">
            <img src={movie.image}
                alt={movie.nameRU} 
                className="movies-card__image"/>
            
            <div className="movies-card__elements">
                <h3 className="movies-card__name">{movie.nameRU}</h3>
                <button type="button" aria-label="кнопка-лайк" 
                        className='movies-card__like'>
                </button>
                <p className="movies-card__duration">{movie.duration}</p>
            </div>
        </li>
    )
};

export default SavedMoviesCard;
