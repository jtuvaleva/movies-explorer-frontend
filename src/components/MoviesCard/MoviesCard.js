import React from 'react';
import './MoviesCard.css';
// import { Switch, Route, Router } from 'react-router-dom';

function getHourMinutes(duration){
    const minutes = duration % 60;
    const hours = (duration-minutes)/60;
    if (hours > 0) {
        return(`${hours}ч ${minutes}м`);
    } else {
        return(`${minutes}м`);
    }
    
}
function MoviesCard({movie, checkSavedMovie, handleMovieLike}) {
    
    const isLiked = checkSavedMovie(movie);

    const filmSavedClassName = `movies-card__like ${
        isLiked ? "movies-card__like_active" : " "
    }`;

    function handleLikeClick() {
        handleMovieLike(movie, isLiked);
    }

    return (
        <>
            <li className="movies-card">
                <a href={movie.trailer} target='_blank' rel="noreferrer">
                    <img src={movie.image}
                        alt={movie.nameRU} 
                        className="movies-card__image"/>
                </a>
                
                <div className="movies-card__elements">
                    <h3 className="movies-card__name">{movie.nameRU}</h3>
                    <button type="button" aria-label="кнопка-лайк" 
                            className={filmSavedClassName}
                            onClick={handleLikeClick}>
                    </button>
                    <p className="movies-card__duration">{getHourMinutes(movie.duration)}</p>
                </div>
            </li>
            
        </>
    )
};

export default MoviesCard;


