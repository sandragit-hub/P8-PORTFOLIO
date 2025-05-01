import React from 'react';
import linkedin from '/assets/linkedin.webp';
import git from '/assets/git.webp';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <a href='https://www.linkedin.com/in/devwebsr/' target="_blank"><img src={linkedin} alt="linkedin" /></a>
                <p> Sandra Rossi <br />
                    Copyright © 2025</p>
                <a href="https://github.com/sandragit-hub?tab=repositories" target="_blank"> <img src={git} alt="github" /></a>
            </div>
        </div>
    );
};

export default Footer;