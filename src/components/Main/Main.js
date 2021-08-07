import React, { useRef } from 'react';
import './Main.css';
import Promo from './Promo/Promo';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
    const aboutProjectRef = useRef(null);
    const techsRef = useRef(null);
    const aboutMeRef = useRef(null);

    return (
        <>
            <Header/>
            <section className="main" >
                <Promo refs={{ aboutProjectRef, techsRef, aboutMeRef }}/>
                <AboutProject ref={aboutProjectRef}/>
                <Techs ref={techsRef}/>
                <AboutMe ref={aboutMeRef}/>
                <Portfolio />
            </section>
            <Footer/>   
        </>
    )
};

export default Main;
