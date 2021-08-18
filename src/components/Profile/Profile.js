import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useFormWithValidation } from '../../utils/validation';
import Header from '../Header/Header';
import './Profile.css';

function Profile({ loggedIn, statusMessage, handleLogout, handleUpdateProfile}) {

    const currentUser = React.useContext(CurrentUserContext);
    const { 
            values, errors, isValid, 
            handleChange, resetForm
    } = useFormWithValidation({  });
    const [isValuesDifferent, setIsValuesDifferent] = useState(false);

    function compareValues() {
        if (
            currentUser.email === values.email &&
            currentUser.name === values.name
        ) {
            setIsValuesDifferent(false);
        } else {
            setIsValuesDifferent(true);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleUpdateProfile(values);
        resetForm();
    }

    useEffect(() => {
        compareValues();
    }, [handleChange]);

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <div className="profile">
                <h2 className="profile__title">Привет, {currentUser.name}!</h2>

                <form className="profile__form" onSubmit={handleSubmit} noValidate autoComplete="off">
                    <div className="profile__form-group">
                        <label htmlFor="profile-name" className="profile__label">Имя </label>
                        <input type="text" id="profile-name"
                               className="profile__form-input"
                               name="name"
                               pattern="[A-Za-zА-Яа-яЁё\-\s]+"
                               minLength = {2}
                               placeholder='Введите имя'
                               value={values.name || currentUser.name}
                               onChange={handleChange}/>
                    </div>
                    <span className="profile-form__input_invalid">{errors.name}</span>

                    <div className="profile__form-group">
                        <label htmlFor="profile-email" className="profile__label">Почта</label>
                        <input type="email" id="profile-email"
                               className="profile__form-input"
                               minLength = {5}
                               name="email"
                               placeholder='Введите почту'
                               value={values.email || currentUser.email}
                               onChange={handleChange}/>
                    </div>
                    <span className="profile-form__input_invalid">{errors.email}</span>

                    <div className='profile-form__submit-area'>
                    <span className="profile-form__input_invalid">{statusMessage || ''}</span>
                    <button type="submit"
                            aria-label='кнопка-редактировать' 
                            className={`profile__edit-btn ${isValid& isValuesDifferent? '':'profile__submit_disabled'}`}
                            disabled={isValid& isValuesDifferent? false: true}>
                            Редактировать
                    </button>

                    <button className="profile__logout"
                            onClick={handleLogout}
                            type="button"
                            role='link'>
                            Выйти из аккаунта
                    </button>
                    </div>
                </form>

            </div>
        </>
    )
};

export default Profile;
