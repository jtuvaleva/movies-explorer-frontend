import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useLocation } from 'react-router-dom';
import { ADD_MIN_MOVIES, ADD_MOVIES, MEDIUM_SCREEN, MOVIES_MED, MOVIES_MIN, MOVIES, LARGE_SCREEN } from '../../utils/constants';

function MoviesCardList({isLoading, moviesDict, checkSavedMovie, handleMovieLike}) {
    let location = useLocation().pathname;

    const [currentCount, setCurrentCount] = useState(() => {
        const width = window.innerWidth;
        if (width > LARGE_SCREEN) {
          return MOVIES;
        } else  if (width > MEDIUM_SCREEN & width <=  LARGE_SCREEN) {
          return MOVIES_MED;
        } else {
          return MOVIES_MIN;
        }
      });
    
      const [addCount, setAddCount] = useState(() => {
        const width = window.innerWidth;
        if (width > LARGE_SCREEN) {
          return ADD_MOVIES;
        } else {
          return ADD_MIN_MOVIES;
        }
      });
    
      const [displayedMovies, setDisplayedMovies] = useState([]);
    
      function handleResize() {
        const width = window.innerWidth;
        if (width > LARGE_SCREEN) {
          setCurrentCount(MOVIES);
          setAddCount(ADD_MOVIES);
        } else if (width > MEDIUM_SCREEN & width <=  LARGE_SCREEN) {
          setCurrentCount(MOVIES_MED);
          setAddCount(ADD_MIN_MOVIES);
        } else {
          setCurrentCount(MOVIES_MIN);
          setAddCount(ADD_MIN_MOVIES);
        }
      }
    
      function renderAddCount() {
        const count = Math.min(moviesDict.length, currentCount + addCount);
        const moviesForAdd = moviesDict.slice(currentCount, count);
        setDisplayedMovies([...displayedMovies, ...moviesForAdd]);
        setCurrentCount(count);
      }
    
      function handleAddMoreMovies() {
        renderAddCount();
      }
    
      useEffect(() => {
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    
    
      useEffect(() => {
        moviesDict !== null ? setDisplayedMovies(moviesDict.slice(0, currentCount)) : setDisplayedMovies(moviesDict);
      }, [moviesDict, currentCount])
    
    return (
      <>
        {(location==='/movies' && !isLoading && (moviesDict !== null && moviesDict.length > currentCount)) ? (
          <>
            <ul className="movies-grid">
              {
                displayedMovies.map((movie) => (
                    <MoviesCard key={movie.movieId}
                                movie={movie}
                                checkSavedMovie={checkSavedMovie}
                                handleMovieLike={handleMovieLike}/>
                ))
              }
            </ul>
            <button className="movies__load-btn"
              type="button"
              onClick={handleAddMoreMovies}>Еще
            </button>
          </>
        ) : (
          <ul className="movies-grid">
            {
                moviesDict.map((movie) => (
                    <MoviesCard key={movie.movieId}
                                movie={movie}
                                checkSavedMovie={checkSavedMovie}
                                handleMovieLike={handleMovieLike}/>
                ))
            }
        </ul>
        )
       
        }
      </>
        
    )
};

export default MoviesCardList;
