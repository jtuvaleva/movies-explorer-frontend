import React from 'react';
import './NavTab.css';

function NavTab({scrollAboutProject, scrollTechnologies, scrollAboutMe}) {    

    return (
        <nav className="navtab">
            <ul className="navtab__list">
                <li className="navtab__list-item">
                    <button onClick={scrollAboutProject} className="navtab__link">О проекте</button>
                </li>

                <li className="navtab__list-item">
                    <button onClick={scrollTechnologies} className="navtab__link">Технологии</button>
                </li>

                <li className="navtab__list-item">
                    <button onClick={scrollAboutMe} className="navtab__link">Студент</button>
                </li>
            </ul>
        </nav>
    )
};

export default NavTab;
