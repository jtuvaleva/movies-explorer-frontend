import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';

function AuthForm({ type }) {
    const formTitle = (type==='signin')?'Рады видеть!':'Добро пожаловать!';
    const buttonName = (type==='signin')? 'Войти':'Зарегистрироваться';
    const redirectLink = (type==='signin')?'signup':'signin';
    const redirectText = (type==='signin')?'Ещё не зарегистрированы? ':'Уже зарегистрированы? ';
    const redirectHighlighed = (type==='signin')?'Регистрация':'Войти';

    return (
        <section className="auth">
            <form className="auth-form">
                <Logo page={type}/>

                <h2 className="auth-form__title">{formTitle}</h2>
                <div className={`auth-form__group auth-form__group_${type}`}>
                    <label htmlFor="auth-form-name" className="auth-form__label">Имя </label>
                    <input type="text" required minLength={2}  id="profile-name"
                        className="auth-form__input" name="profile-name" placeholder='Юлия' />
                </div>

                <div className="auth-form__group">
                    <label htmlFor="auth-form-name" className="auth-form__label">E-mail </label>
                    <input type="email" required minLength={6} id="profile-email"
                        className="auth-form__input" name="profile-email" placeholder='myemail@yandex.ru' />
                </div>

                <div className="auth-form__group">
                    <label htmlFor="auth-form-name" className="auth-form__label">Пароль </label>
                    <input type="password" required minLength={6} id="profile-password"
                        className="auth-form__input" name="profile-password" />
                </div>
                <span className="auth-form__input_invalid">Что-то пошло не так</span>

                <button type="submit" aria-label={`кнопка-{buttonName}`}
                className={`auth-form__submit auth-form__submit_${type}`}
                value={buttonName}>{buttonName}
                </button>
                <Link to={redirectLink} className="auth__link">
                    {redirectText} &nbsp; <span className="auth__link_highlighted">{redirectHighlighed}</span>
                </Link>
            </form>
        </section>
    )
};

export default AuthForm;