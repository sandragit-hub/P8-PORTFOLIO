import React from "react";
import sandra from "/assets/sandra.png";

const Contact = () => {
  return (
    <div id="apropos-section" className="about-container">
      <section>
        <h2 className="title-apropos"> À propos </h2>
      </section>
      <div className="about">
        <section className="container-sandra">
          <h3 className="title-sandra"> Qui suis-je ? </h3>
          <p className="texte-sandra">
            🚀 Je m’appelle Sandra Rossi, développeuse web passionnée, j’adore
            relever des défis et repousser mes limites. Ancienne sportive de
            compétition, j’ai gardé cette soif de dépassement, cette exigence de
            rigueur et de performance. Aujourd’hui, c’est dans le code que je
            retrouve cette adrénaline, ce besoin de stratégie et de précision.
            Avec React, je conçois des interfaces modernes, dynamiques et
            optimisées, pensées pour marquer les esprits. Toujours à l’écoute,
            j’aime comprendre l’essence d’un projet pour le transformer en une
            solution sur mesure. Chaque ligne de code est une action réfléchie,
            chaque projet un challenge à relever avec intensité et créativité.
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
