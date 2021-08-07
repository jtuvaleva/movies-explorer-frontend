import React from 'react';
import './SavedMovieCard.css';
import '../MoviesCard/MoviesCard';

function MoviesCard() {
    
    return (
        <>
            <li className="movies-card">
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzEnfHOXX8nOOCInR9EmGVIDRY9-cIlpAcAQ&usqp=CAU' alt='33 слова о дизайне' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Бег это свобода</h2>
                    <button type="button" aria-label="кнопка-удалить" 
                            className='movies-card__delete'>
                    </button>
                    <p className="movies-card__duration">1ч 44мин</p>
                </div>
            </li>

            <li className="movies-card">
                <img src='https://avatars.mds.yandex.net/get-ott/239697/2a00000173a5696fa665f8a3597aa22291fb/678x380' alt='книготорговцы' className="movies-card__image"/>
                
                <div className="movies-card__elements">
                    <h2 className="movies-card__name">Книготорговцы</h2>
                    <button type="button" aria-label="кнопка-удалить" 
                            className='movies-card__delete'>
                    </button>
                    <p className="movies-card__duration">1ч 37мин</p>
                </div>
            </li>
        </>
    )
};

export default MoviesCard;
