import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BurgerButton from './BurgerButton/BurgerButton';
import Navigation from './Navigation/Navigation';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
    const currentPage = useLocation();
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleBurger = () => {
        setBurgerMenu(!burgerMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)
        changeWidth()
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])


    return (
        <div className="header">
            <Logo />
            { (currentPage.pathname==='/')  ? (
                <div className="header__link-area">
                    <Link to='/signup' className="header__link header__link_register">Регистрация</Link>
                    <Link to='/signin' className="header__link header__link_login">Войти</Link>
                </div>
            ):(
                <>
                <Navigation burgerMenu={burgerMenu} screenWidth={screenWidth}/>
                <BurgerButton isBurgerOpen={burgerMenu} onClick={handleBurger}/>
                </>
            )}
        </div>
    )
};

export default Header;
