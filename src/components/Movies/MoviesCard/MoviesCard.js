import React from 'react';
import './MoviesCard.css';
// import { Switch, Route, Router } from 'react-router-dom';

function MoviesCard() {
    return (
        <>
            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/2423210/be4a2a9f02659627a01c5720f309875d/960x540'
                    alt='33 слова о дизайне' 
                    className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h3 className="movies-card__name">33 слова о дизайне</h3>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like'>
                    </button>
                    <p className="movies-card__duration">1ч 47мин</p>
                </div>
            </li>
            
            <li className="movies-card">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEnfHOXX8nOOCInR9EmGVIDRY9-cIlpAcAQ&usqp=CAU' alt='33 слова о дизайне' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Бег это свобода</h2>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like movies-card__like_active'>
                    </button>
                    <p className="movies-card__duration">1ч 44мин</p>
                </div>
            </li>
            
            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-ott/239697/2a00000173a5696fa665f8a3597aa22291fb/678x380' alt='книготорговцы' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Книготорговцы</h2>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like'>
                    </button>
                    <p className="movies-card__duration">1ч 37мин</p>
                </div>
            </li>

            <li className="movies-card">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEnfHOXX8nOOCInR9EmGVIDRY9-cIlpAcAQ&usqp=CAU' alt='33 слова о дизайне' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Бег это свобода</h2>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like'>
                    </button>
                    <p className="movies-card__duration">1ч 44мин</p>
                    
                </div>
            </li>

            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-kinopoisk-post-img/2423210/be4a2a9f02659627a01c5720f309875d/960x540' alt='33 слова о дизайне' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h3 className="movies-card__name">33 слова о дизайне</h3>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like'>
                    </button>
                    <p className="movies-card__duration">1ч 47мин</p>
                </div>
            </li>
            
            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-ott/239697/2a00000173a5696fa665f8a3597aa22291fb/678x380' alt='книготорговцы' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Книготорговцы</h2>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__like movies-card__like_active'>
                    </button>
                    <p className="movies-card__duration">1ч 37мин</p>
                </div>
            </li>

            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-ott/239697/2a00000173a5696fa665f8a3597aa22291fb/678x380' alt='книготорговцы' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Книготорговцы</h2>
                    <button type="button" aria-label="кнопка-лайк" 
                            className='movies-card__delete'>
                    </button>
                    <p className="movies-card__duration">1ч 37мин</p>
                </div>
            </li>
        </>
    )
};

export default MoviesCard;
