import React from 'react';
import './Register.css';
import AuthForm from '../AuthForm/AuthForm';

function Register({ statusMessage, handleRegister }) {
    return (
        <AuthForm type='signup'
                  resErrorMessage = {statusMessage}
                  handleSubmitAction={handleRegister}
                  />
    )
};

export default Register;
