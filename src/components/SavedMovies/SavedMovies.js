import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import { SAVED_MOVIE_EMPTY, SHORT_MOVIE_NOT_FOUND } from '../../utils/statusMessages';

function SavedMovies({
    loggedIn, isLoading, moviesDict, filteredDict, moviesSearchStatus, 
    searchShortFilmStatusOk,
    isShortMovies, filterShortMovies, handleShortMovie, handleSearch,
    checkSavedMovie, handleMovieLike
}) {
    const [shortMoviesList, setShortMoviesList] = useState([]);

    useEffect(() => {
        if (isShortMovies && moviesDict !== null) {
            setShortMoviesList(filterShortMovies(moviesDict));
        } else {
            setShortMoviesList(moviesDict);
        }
    }, [moviesDict]);

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <section className="movies">
                <SearchForm isLoading={isLoading}
                            isShortMovies={isShortMovies}
                            handleShortMovie={handleShortMovie}
                            handleSearch={handleSearch}/>
                { isLoading ? (<Preloader/>
                ):(searchShortFilmStatusOk===false & isShortMovies) ? (
                    <p className='movies_notfound-text'>{SHORT_MOVIE_NOT_FOUND}</p>
                ):(moviesSearchStatus & moviesDict.length !== 0) ? (
                    <MoviesCardList isLoading={isLoading}
                                    moviesDict={!isShortMovies? moviesDict: shortMoviesList}
                                    checkSavedMovie={checkSavedMovie}
                                    handleMovieLike={handleMovieLike}/>
                ) : (moviesDict.length === 0 ) ?(
                    <p className='movies_notfound-text'>{SAVED_MOVIE_EMPTY}</p>
                ) :(
                    <p className='movies_notfound-text'>{SAVED_MOVIE_EMPTY}</p>
                )
                }
            </section>
            <Footer/>
        </>
    )
};

export default SavedMovies;
