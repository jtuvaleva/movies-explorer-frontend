import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import './Profile.css';

function Profile() {
    const [isOpenSaveBtn, setIsOpenSaveBtn] = useState(false);

    const openSaveEdits = () => {
        setIsOpenSaveBtn(!isOpenSaveBtn);
    }

    return (
        <>
            <Header/>
            <div className="profile">
                <h2 className="profile__title">Привет, Юлия!</h2>

                <form className="profile__form">
                    <div className="profile__form-group">
                        <label htmlFor="profile-name" className="profile__label">Имя </label>
                        <input type="text" id="profile-name"
                            className="profile__form-input" name="profile-name" placeholder='Юлия' />
                    </div>

                    <div className="profile__form-group">
                        <label htmlFor="profile-email" className="profile__label">E-mail </label>
                        <input type="text" id="profile-email"
                            className="profile__form-input" name="profile-email" placeholder='myemail@yandex.ru' />
                    </div>
                    
                    
                    {
                        (isOpenSaveBtn)?(
                                <button type="submit" aria-label={`кнопка-сохранить`}
                                    className='profile__submit profile__submit_disabled'
                                    value={'сохранить'}>Сохранить
                                </button>
                        ):(
                            <>
                                <button onClick={openSaveEdits} type="submit" aria-label='кнопка-редактировать' 
                                        className="profile__edit-btn" value='редактировать'>
                                            Редактировать
                                </button>

                                <Link to='/' className="profile__logout">
                                    Выйти из аккаунта
                                </Link>
                            </>
                        )
                    }
                </form>

            </div>
        </>
    )
};

export default Profile;
