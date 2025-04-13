import React, { useEffect, useState } from 'react';
import logo from '/assets/logo.png';

const Header = () => {

    const [selectLi, setSelectLi] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY)

    const liClick = (id) => {
        setSelectLi(id);
    }

    useEffect(() => {
        const scroll = () => {
            if (window.scrollY < lastScrollY - 5) {
                setShowHeader(true);
            } else if (window.scrollY > lastScrollY + 5) {
                setShowHeader(false);
            }
            setLastScrollY(window.scrollY);
        }
        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, [lastScrollY]);
    return (
        <div className={`header-container ${showHeader ? 'show' : 'hide'}`}>
            <h2> Portfolio </h2>
            <nav className='nav'>
                <ul>
                    <li className={selectLi === 'accueil' ? 'active' : ''}>
                        <a href="#accueil-section" onClick={() => liClick('accueil')}>Accueil</a>
                    </li>
                    <li className={selectLi === 'apropos' ? 'active' : ''}>
                        <a href="#apropos-section" onClick={() => liClick('apropos')}>À propos</a>
                    </li>
                    <li className="no-hover">
                        <img src={logo} alt="logo" />
                    </li>
                    <li className={selectLi === 'projets' ? 'active' : ''}>
                        <a href="#projets-section" onClick={() => liClick('projets')}>Projets</a>
                    </li>
                    <li className={selectLi === 'contact' ? 'active' : ''}>
                        <a href="#contact-section" onClick={() => liClick('contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <input type='submit' value="Un projet ?"></input>
        </div>
    );
};

export default Header;