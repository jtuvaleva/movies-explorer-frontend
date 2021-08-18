import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';

function Login({ statusMessage, handleLogin }) {
    
    return (
        <AuthForm type='signin'
                  resErrorMessage = {statusMessage}
                  handleSubmitAction={handleLogin}/>
    )
};

export default Login;
