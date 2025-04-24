import React, { useEffect, useState } from 'react';
import logo from '/assets/logo.png';

const Header = () => {

    const [selectLi, setSelectLi] = useState(null);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY)
    const [isOpen, setIsOpen] = useState(false);

    const liClick = (id) => {
        setSelectLi(id);
        setIsOpen(false); // ferme le menu au click
        document.getElementById(`${id}-section`)?.scrollIntoView({ behavior: 'smooth' });
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen)
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

            <nav className={`nav ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li className={selectLi === 'accueil' ? 'active' : ''} onClick={() => liClick('accueil', 'accueil-section')}>
                        Accueil
                    </li>
                    <li className={selectLi === 'apropos' ? 'active' : ''} onClick={() => liClick('apropos', 'apropos-section')}>
                        À propos
                    </li>
                    <li className="no-hover">
                        <img className="circle" src={logo} alt="logo" />
                    </li>
                    <li className={selectLi === 'projets' ? 'active' : ''} onClick={() => liClick('projets', 'projets-section')}>
                        Projets
                    </li>
                    <li className={selectLi === 'contact' ? 'active' : ''}>
                        <a href="#contact-section" onClick={(e) => liClick(e, 'contact')}>Contact</a>
                    </li>
                </ul>
            </nav>
            <input type='submit' value="Un projet ?" onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}></input>
            <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span className='barre'></span>
                <span className='barre'></span>
                <span className='barre'></span>
            </div>
        </div>
    );
};

export default Header;