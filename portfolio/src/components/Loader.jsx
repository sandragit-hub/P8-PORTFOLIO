import { useEffect, useState } from 'react';

function Loader({ onFinish }) {
    const [progress, setProgress] = useState(0);
    const gifUrl = '/assets/background.gif';

    useEffect(() => {
        const img = new Image();
        img.src = gifUrl;

        let interval; // Déclaration de l'intervalle ici, en dehors du `useEffect`

        img.onload = () => {
            // Quand le gif est chargé, on démarre la progression de la barre
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(interval);
                        setTimeout(onFinish, 300); // Petite pause à la fin
                        return 100;
                    }
                    return prev + 2;
                });
            }, 20);
        };

        return () => {
            // Nettoyer l'intervalle même si le composant est démonté
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [onFinish, gifUrl]); // Dépendances : on relance l'effet si `gifUrl` change

    return (
        <div className="loader-container">
            <div className="loading-bar">
                <div
                    className="progress"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
}

export default Loader;
