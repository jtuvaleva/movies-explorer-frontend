import React, { forwardRef } from 'react';
import './AboutProject.css';

const AboutProject = forwardRef((props, ref) => {
    return (
        <section className="aboutproject" ref={ref}>
            <h2 className="aboutproject__title">
                О проекте
            </h2>

            <ul className="aboutproject__list">
                <li className="aboutproject__list-item">
                    <p className="aboutproject__list-title">Дипломный проект включал 5 этапов</p>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                </li>

                <li className="aboutproject__list-item">
                    <p className="aboutproject__list-title">На выполнение диплома ушло 5 недель</p>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                </li>
            </ul>

            <div className="aboutproject__timeline">
                <div className="aboutproject__timeline aboutproject__timeline_backend">
                    1 неделя
                </div>
                <div className="aboutproject__timeline aboutproject__timeline_frontend">
                    4 недели
                </div>
            </div>

            <div className="aboutproject__timeline-label">
                <span className="aboutproject__timeline-label aboutproject__timeline-label_backend">Backend</span>
                <span className="aboutproject__timeline-label aboutproject__timeline-label_frontend">Frontend</span>
            </div>
        </section>
    )
});

export default AboutProject;
