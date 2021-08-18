import React from 'react';
import './NotFound.css';
import { useHistory } from 'react-router';

function NotFound() {
    const history = useHistory();

    const goPreviousPage = () => {
        history.goBack()
    };

    return (
        <section className="notfound">
            <div className="notfound__container">
                <h2 className="notfound__title">404</h2>
                <p className="notfound__text">Страница не найдена</p>
            </div>
            
            <button onClick={goPreviousPage} className="notfound__button-back">
                Назад
            </button>
        </section>
    )
};

export default NotFound;