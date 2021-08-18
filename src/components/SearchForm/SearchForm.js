import React, { useState } from 'react';
import { useFormWithValidation } from '../../utils/validation';
import Checkbox from './Checkbox/Checkbox';
import './SearchForm.css';
// import { Switch, Route, Router } from 'react-router-dom';

function SearchForm({isLoading, isShortMovies, handleShortMovie, handleSearch}) {
    const { values, isValid, handleChange } =
    useFormWithValidation({});
    const [keyword, setKeyword] = useState('');

    function handleChangeInput(e) {
        handleChange(e);
        setKeyword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(keyword);
    }

    return (
        <div className="search">
            <form className="search-form" onSubmit={handleSubmit} autoComplete="off" >
                <input className="search-form__input"
                        name="keyword"
                        type="text" 
                        required
                        minLength={2}
                        maxLength={100}
                        placeholder="Фильм"
                        onChange={handleChangeInput}
                        value={values.keyword || ''}
                        />
                <button type='submit'
                        className={`search__submit-btn ${isValid?'':'search__submit-btn_disabled'}`}
                        disabled={!isValid}>
                </button>
            </form>

            <Checkbox checkedShortMovie = {isShortMovies}
                      handleChange={handleShortMovie} />
        </div>
    )
};

export default SearchForm;
