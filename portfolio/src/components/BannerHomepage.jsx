import React from 'react';
import ordinateur from '../assets/ordi.png';


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
            <div className="image-container">
                <img className="imgComputer" src={ordinateur} alt="ordinateur" />
            </div>
        </div>
    );
};

export default BannerHomepage;