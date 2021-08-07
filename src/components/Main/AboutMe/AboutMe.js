import React, { forwardRef } from 'react';
import './AboutMe.css';

const AboutMe = forwardRef((props, ref) => {
    return (
        <section className="aboutme" ref={ref}>
            <div className="aboutme__container">
                <h2 className="aboutme__title">Студент</h2>

                <div className="aboutme__information">
                    <div className="aboutme__description">
                        <p className="aboutme__name">Юлия</p>
                        <p className="aboutme__bio">Фронтенд-разработчик, 27 лет</p>
                        <p className="aboutme__text">Я живу в Москве, закончила географический факультет МГУ. Я люблю снимать на пленочный фотоаппарат и проводить время со своей собакой. 
                        Начала кодить еще в университете. До начала учебы в Яндекс.Практикуме работала геоаналитиком. После того, как прошла курс по веб-разработке, сменила работу и теперь осваиваю новую профессию.
                        </p>

                        <ul className="aboutme__list">
                            <li className="aboutme__list-item">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="aboutme__link">
                                    Facebook
                                </a>
                            </li>
                            <li  className="aboutme__list-item">
                                <a href="https://github.com" target="_blank" rel="noreferrer" className="aboutme__link">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="aboutme__photo"/>
                </div>
            </div>
        </section>
    )
});

export default AboutMe;
