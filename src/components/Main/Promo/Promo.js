import React from 'react';
import './Promo.css';
import NavTab from './NavTab/NavTab';

function Promo({refs}) {
    const { aboutProjectRef, techsRef, aboutMeRef } = refs;

    const scrollToAboutProject = () => {
      aboutProjectRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const scrollToTechnologies = () => {
      techsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const scrollToAboutMe = () => {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div className="promo">
            <h1 className="promo__title">
                Учебный проект студента факультета Веб-разработки.
            </h1>
            <NavTab scrollAboutProject={scrollToAboutProject}
                    scrollTechnologies={scrollToTechnologies}
                    scrollAboutMe={scrollToAboutMe} />
        </div>
    )
};

export default Promo;
