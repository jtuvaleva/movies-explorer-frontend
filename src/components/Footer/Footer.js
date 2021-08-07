import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
            
            <div className="footer__container">
                <p className="footer__author">&copy;{new Date().getFullYear()}</p>

                <nav className="footer__sitelink">
                    <ul className="footer__sitelink-list">
                        <li className="footer__list-item">
                            <a href="https://praktikum.yandex.ru/" target="_blank" rel="noreferrer" className="footer__link">
                                Яндекс.Практикум
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">
                                Github
                            </a>
                        </li>

                        <li className="footer__list-item">
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footer__link">
                            Facebook
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
};

export default Footer;
