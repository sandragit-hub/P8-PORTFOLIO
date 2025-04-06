import React, { useState } from 'react';
import logo from '/assets/logo.png';

const Header = () => {

    const [selectLi, setSelectLi] = useState(null);

    const liClick = (id) => {
        setSelectLi(id);
    }

    return (
        <div className='header-container'>
            <h2> Portfolio </h2>
            <nav className='nav'>
                <ul>
                    <li className={selectLi === 'accueil' ? 'active' : ""} onClick={() => liClick('accueil')} id='accueil'>  <a href="#accueil-section"> Accueil </a> </li>
                    <li className={selectLi === 'apropos' ? 'active' : ""} onClick={() => liClick('apropos')} id='apropos'>  <a href="#apropos-section"> À propos </a> </li>
                    <li className='no-hover'> <img src={logo} alt="logo" /></li>
                    <li className={selectLi === 'projets' ? 'active' : ""} onClick={() => liClick('projets')} id='projets'>  <a href="#projets-section"> Projets </a> </li>
                    <li className={selectLi === 'contact' ? 'active' : ""} onClick={() => liClick('contact')} id='contact'> <a href="#contact-section"> Contact </a> </li>
                </ul>
            </nav>
            <input type='submit' value="Un projet ?"></input>
        </div>
    );
};

export default Header;