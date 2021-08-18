import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <h2 className="portfolio__title">Портфолио</h2>

            <ul className="portfolio__list">
                <li className="portfolio__list-item">
                    <a href="https://github.com/jtuvaleva/how-to-learn" target="_blank" rel="noreferrer" className="portfolio__link">
                        Статичный сайт 
                        <span className="portfolio__arrow-symbol">
                            ↗
                        </span>         
                    </a>
                    
                </li>
                <li className="portfolio__list-item">
                    <a href="https://github.com/jtuvaleva/russian-travel" target="_blank" rel="noreferrer" className="portfolio__link">
                        Адаптивный сайт
                        <span className="portfolio__arrow-symbol">
                            ↗
                        </span>         
                    </a>
                </li>
                <li className="portfolio__list-item">
                    <a href="https://front.mestojuly.nomoredomains.monster" target="_blank" rel="noreferrer" className="portfolio__link">
                        Одностраничное приложение
                        <span className="portfolio__arrow-symbol">
                            ↗
                        </span>         
                    </a>
                </li>
            </ul>   
        </div>
    )
};

export default Portfolio;
