import React from 'react';
import './Movies.css';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
//import Preloader from '../Preloader/Preloader';
import { useLocation } from 'react-router-dom';

function Movies() {
    const currentPage = useLocation();
    const openedAllMovies = (currentPage.pathname==='/movies');

    return (
        <>
            <Header/>
            <section className="movies">
                <SearchForm/>
                {/* <Preloader/> */}
                <MoviesCardList openedAllMovies={openedAllMovies}/>

                { openedAllMovies && (
                    <button className="movies__load-btn" type="submit">
                        Ещё
                    </button>
                  )
                }
            </section>
            <Footer/>
        </>
    )
};

export default Movies;
