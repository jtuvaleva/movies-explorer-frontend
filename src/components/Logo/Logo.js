import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';

function Logo({page}) {
    const isAuth = (page==='signin') || (page==='signup');
    return (
            <Link to='/' className={`logo ${isAuth?'logo_auth':''}`}/>
    )
};

export default Logo;