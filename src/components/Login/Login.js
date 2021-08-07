import React from 'react';
import './Login.css';
import AuthForm from '../AuthForm/AuthForm';
//import Preloader from '../Preloader/Preloader';
// import { Switch, Route, Router } from 'react-router-dom';

function Login() {
    return (
        <AuthForm type='signin'/>
    )
};

export default Login;
