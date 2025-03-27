import React, { useEffect, useState } from 'react';
import ordinateur from '../assets/ordi.png';

const words = ["réalité", "succès", "projets"];

const BannerHomepage = () => {

    const [wordChange, setWordChange] = useState(0);
    const [typedWord, setTypedWord] = useState('');
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let typingInterval;
        if (isTyping) {
            // Si on tape un mot
            typingInterval = setInterval(() => {
                setTypedWord((prevWord) => {
                    const wordToType = words[wordChange] + '.';
                    const newWord = wordToType.slice(0, prevWord.length + 1);
                    return newWord;
                });
            }, 200); // Vitesse de "tapage" (100ms par caractère)
        } else {
            // On a terminé de taper, on change de mot après un délai
            const nextWordIndex = (wordChange + 1) % words.length;
            setTimeout(() => {
                setTypedWord(''); // Efface le mot en cours
                setIsTyping(true); // Reprend l'écriture du mot suivant
                setWordChange(nextWordIndex);
            }, 2000);
        }

        // Quand le mot est complètement tapé, on arrête l'intervalle
        if (typedWord.length === words[wordChange].length) {
            clearInterval(typingInterval);
            setIsTyping(false); // On arrête de taper
        }

        // Nettoyage de l'intervalle à chaque mise à jour
        return () => clearInterval(typingInterval);
    }, [typedWord, isTyping, wordChange]);

    return (
        <div className='banner-container'>
            <section className="overlay">
                <h1>Développeur Web</h1>
                <p>
                    Votre vision, mon code : <br />
                    ensemble, transformons vos <br />
                    idées en
                    <span className="word-change">  {typedWord}</span>
                </p>
            </section>
            <div className="image-container">
                <img className="imgComputer" src={ordinateur} alt="ordinateur" />
            </div>
        </div>
    );
};

export default BannerHomepage;