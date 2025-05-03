import React from 'react';
import sandra from '/assets/sandra.png';

const Contact = () => {
    return (
        <div id='apropos-section' className="about-container">
            <section>
                <h2 className='title-apropos'> À propos </h2>
            </section>
            <div className="about">
                <section>
                    <h3 className="title-sandra" > Qui suis-je ? </h3>
                    <p className='texte-sandra'>
                        🚀 Je m’appelle Sandra Rossi, développeuse web passionnée,<br /> j’adore relever des défis et repousser mes limites.
                        <br />Ancienne sportive de compétition, j’ai gardé cette <br />soif de dépassement, cette exigence de rigueur et de performance.<br />
                        Aujourd’hui, c’est dans le code que je retrouve <br />cette adrénaline, ce besoin de stratégie et de <br />précision.
                        Avec React, je conçois des interfaces modernes, <br />dynamiques et optimisées, pensées pour marquer les esprits.
                        <br />Toujours à l’écoute, j’aime comprendre l’essence d’un projet pour<br /> le transformer en une solution sur mesure.
                        <br />Chaque ligne de code est une action réfléchie, chaque projet<br /> un challenge à relever avec intensité et créativité.
                    </p>
                </section>
                <div className="img-about">
                    <img src={sandra} alt="sandra" />
                </div>
            </div>
        </div>
    );
};

export default Contact;