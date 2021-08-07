import React from 'react';
import Checkbox from './Checkbox/Checkbox';
import './SearchForm.css';
// import { Switch, Route, Router } from 'react-router-dom';

function SearchForm() {
    return (
        <div className="search">
            <div className="search-form">
                <input className="search-form__input" type="text" placeholder="Фильм"/>
                <button className="search__submit-btn">
                </button>
            </div>

            <Checkbox/>
        </div>
    )
};

export default SearchForm;
