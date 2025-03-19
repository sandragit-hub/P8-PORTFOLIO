import React from 'react';
import '../utils/sass/Header.scss';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <h2> Portfolio </h2>
            <nav className='nav'>
                <li id='accueil'> Accueil </li>
                <li id='apropos'> À propos </li>
                <img src={logo} alt="logo" />
                <li id='projets'> Projets </li>
                <li id='contact'> Contact </li>
            </nav>
            <input type='submit' value="Un projet ?"></input>
        </div>
    );
};

export default Header;