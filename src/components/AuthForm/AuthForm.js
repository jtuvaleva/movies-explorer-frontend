import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.css';
import Logo from '../Logo/Logo';
import { useFormWithValidation } from '../../utils/validation';

function AuthForm({ type,  resErrorMessage,  handleSubmitAction}) {
    const { values, errors, isValid, handleChange, resetForm } =
    useFormWithValidation({});
    
    const formTitle = (type==='signin')?'Рады видеть!':'Добро пожаловать!'
    const buttonName = (type==='signin')? 'Войти':'Зарегистрироваться';
    const redirectLink = (type==='signin')?'signup':'signin';
    const redirectText = (type==='signin')?'Ещё не зарегистрированы? ':'Уже зарегистрированы? ';
    const redirectHighlighed = (type==='signin')?'Регистрация':'Войти';

    function handleSubmit(e) {
        e.preventDefault();
        if (type === 'signup'){
            handleSubmitAction(values.name, values.email, values.password);
        } else {
            handleSubmitAction(values.email, values.password)
        }
        resetForm();
    };

    return (
        <section className="auth">
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
                <Logo page={type}/>

                <h2 className="auth-form__title">{formTitle}</h2>
                {
                  (type==='signup') && 
                    <div className='auth-form__group'>
                        <label className="auth-form__label">
                            Имя 
                        </label>
                        <input type="text"
                               required 
                               minLength={2} 
                               pattern="[A-Za-zА-Яа-яЁё\-\s]+"
                               id="profile-name"
                               className="auth-form__input"
                               name="name"
                               placeholder='Введите имя'
                               autoComplete="off"
                               onChange={handleChange}
                               value={values.name || ""}/>
                        <span className="auth-form__input_invalid">{errors.name}</span>
                    </div>
                }
                
                <div className="auth-form__group">
                    <label className="auth-form__label">
                        E-mail
                    </label>
                    <input type="email"
                           required
                           minLength={6}
                           id="profile-email"
                           className="auth-form__input"
                           name="email"
                           placeholder='Введите адрес почты'
                           autoComplete="off"
                           onChange={handleChange}
                           value={values.email || ""}/>
                     <span className="auth-form__input_invalid">{errors.email}</span>
                </div>
               
                <div className="auth-form__group">
                    <label className="auth-form__label">
                        Пароль
                    </label>
                    <input type="password"
                           required
                           minLength={6} 
                           id="profile-password"
                           className="auth-form__input"
                           name="password"
                           placeholder='Введите пароль'
                           autoComplete="off"
                           onChange={handleChange}
                           value={values.password || ""}/>
                    <span className="auth-form__input_invalid">{errors.password}</span>
                </div>
                

                <div className={`auth-form__submit-area auth-form__submit_${type}`}>
                    <span className="auth-form__input_invalid">{resErrorMessage}</span>
                    <button type="submit"
                            aria-label={`кнопка-${buttonName}`}
                            className={`auth-form__submit ${!isValid?'auth-form__submit_disabled':''}`}
                            disabled={!isValid}
                            value={buttonName}>
                        {buttonName}
                    </button>
                    <Link to={redirectLink} className="auth__link">
                        {redirectText} &nbsp;
                        <span className="auth__link_highlighted">
                            {redirectHighlighed}
                        </span>
                    </Link>
                </div>
            </form>
        </section>
    )
};

export default AuthForm;