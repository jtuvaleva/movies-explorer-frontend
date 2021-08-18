import React from 'react';
import './Checkbox.css';
// import { Switch, Route, Router } from 'react-router-dom';

function Checkbox({ checkedShortMovie, handleChange}) {
    return (
        <div className="checkbox">

            <div className="switch-btn">
                <input type="checkbox"
                        className="switch-btn__area"
                        checked={checkedShortMovie}
                        onChange={handleChange}/>
                <div className="switch-btn__slider"></div>
            </div>

            <p className="filter__name">
                Короткометражки
            </p>
        </div>
    )
};

export default Checkbox;