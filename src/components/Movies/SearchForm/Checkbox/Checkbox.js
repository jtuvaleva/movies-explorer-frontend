import React from 'react';
import './Checkbox.css';
// import { Switch, Route, Router } from 'react-router-dom';

function Checkbox() {
    return (
        <div className="checkbox">

            <div className="switch-btn">
                <input type="checkbox" className="switch-btn__area"/>
                <div className="switch-btn__slider"></div>
            </div>

            <p className="filter__name">
                Короткометражки
            </p>
        </div>
    )
};

export default Checkbox;