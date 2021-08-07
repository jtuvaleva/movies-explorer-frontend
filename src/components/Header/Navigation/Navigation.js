import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation({burgerMenu, screenWidth}) {

    return (
        <nav className={`header__navigation ${burgerMenu?'header__navigation_mobile':''}`}>
            {(burgerMenu || screenWidth > 768) && (
                <ul className='navigation__list'>
                    {(screenWidth< 401)&&(
                        <li className='navigation__list-item'>
                            <NavLink to='/' className="navigation__link" activeClassName="navigation__link_active">Главная</NavLink>
                        </li>
                    )}
                    <li className='navigation__list-item'>
                        <NavLink to='/movies' className="navigation__link" activeClassName="navigation__link_active">Фильмы</NavLink>
                    </li>

                    <li className='navigation__list-item'>
                        <NavLink to='/saved-movies' className="navigation__link" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink>
                    </li>

                    <li className='navigation__list-item'>
                        <NavLink to='/profile' className="navigation__link navigation__link_account"  activeClassName="navigation__link_active" replace>
                            Аккаунт
                            <div className="navigation__image-container">
                                <div className="navigation__link-image"/>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    )
};

export default Navigation;
