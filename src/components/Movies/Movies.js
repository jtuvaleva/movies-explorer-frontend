import React, { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';
import { MOVIE_EMPTY_PAGE, MOVIE_NOT_FOUND, SHORT_MOVIE_NOT_FOUND } from '../../utils/statusMessages';

function Movies({
    loggedIn, isLoading, moviesDict, savedMoviesDict, moviesSearchStatus, 
    searchShortFilmStatusOk,
    isShortMovies, filterShortMovies, handleShortMovie, handleSearch,
    checkSavedMovie, handleMovieLike
}) {
    const currentPage = useLocation();
    const openedAllMovies = (currentPage.pathname==='/movies');
    const [shortMoviesList, setShortMoviesList] = useState([]);

    useEffect(() => {
        if (isShortMovies && moviesDict !== null) {
            console.log('im here')
            setShortMoviesList(filterShortMovies(moviesDict));
        } else {
            setShortMoviesList(moviesDict);
        }
        
    }, [isShortMovies, moviesDict]);

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <section className="movies">
                <SearchForm isLoading={isLoading}
                            isShortMovies={isShortMovies}
                            handleShortMovie={handleShortMovie}
                            handleSearch={handleSearch}/>
                { isLoading ? (<Preloader/>
                ) : (searchShortFilmStatusOk===false & isShortMovies) ? (
                    <p className='movies_notfound-text'>{SHORT_MOVIE_NOT_FOUND}</p>
                ) : (moviesSearchStatus & moviesDict!==null) ? (
                    <MoviesCardList isLoading={isLoading}
                    openedAllMovies={openedAllMovies}
                    moviesDict={!isShortMovies? moviesDict: shortMoviesList}
                    savedMoviesDict={savedMoviesDict}
                    checkSavedMovie={checkSavedMovie}
                    handleMovieLike={handleMovieLike}/>
                
                ):(moviesDict===null)?(
                    <p className='movies_notfound-text'>{MOVIE_EMPTY_PAGE}</p>
                ) : (
                    <p className='movies_notfound-text'>{MOVIE_NOT_FOUND}</p>
                )}
            </section>
            <Footer/>
        </>
    )
};

export default Movies;
