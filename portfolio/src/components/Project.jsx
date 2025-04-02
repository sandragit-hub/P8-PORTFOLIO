import React, { useEffect, useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [hoverCard, setHoverCard] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log('Error:', error));
    }, []);

    return (
        <div className='container-project'>
            <h2 className='title-project'>Projets</h2>
            <p className='texte-project'>Voici les différents projets réalisés durant mon parcours chez Openclassroom.</p>
            <div className='card-container'>
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className='card-project'
                        onMouseEnter={() => setHoverCard(index)}
                        onMouseLeave={() => setHoverCard(null)}
                    >
                        {/* Image + Description & Tags */}
                        <div className='containerCard-img'>
                            <img
                                className={`project-img ${hoverCard === index ? "darken" : ""}`}
                                src={project.image}
                                alt={project.title}
                            />
                            {/* Contenu affiché au survol */}
                            <div className={`img-survol ${hoverCard === index ? "visible" : ""}`}>
                                <p className="descriptionCard">{project.descriptionCard}</p>
                                <div className="tags">
                                    {project.tags?.map((tag, i) => (
                                        <span key={i} className="tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Titre + Bouton */}
                        <div className="container-title">
                            <h3 className='title-card'>{project.title}</h3>
                            <img
                                src="/assets/btnCard.png"
                                alt="Voir plus"
                                className={`btnCard ${hoverCard === index ? "visible" : ""}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
