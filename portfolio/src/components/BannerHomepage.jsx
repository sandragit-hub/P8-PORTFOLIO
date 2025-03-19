import React from 'react';
import ordinateur from '../assets/ordinateur.png';


const BannerHomepage = () => {
    return (
        <div className='banner-container'>
            <section className="overlay">
                <h1>Développeur Web</h1>
                <p>
                    Votre vision, mon code : <br />
                    ensemble, transformons vos <br />
                    idées en réalité.
                </p>
            </section>
            <div>
                <img className="imgComputer" src={ordinateur} alt="ordinateur" />
            </div>
        </div>
    );
};

export default BannerHomepage;