import React, { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';

const Project = () => {
    const [projects, setProjects] = useState([]);
    const [hoverCard, setHoverCard] = useState(null);
    const [modal, setModal] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetch('https://p8-portfolio.onrender.com/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log('Error:', error));
    }, []);

    const openModal = (project) => {
        if (modalOpen) return; // Ne rien faire si la modal est déjà ouverte
        setModal(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModal(null);
    };

    return (
        <section id='projets-section' className='container-project'>
            <h2 className='title-project'>Projets</h2>
            <p className='texte-project'>Voici les différents projets réalisés durant mon parcours chez Openclassroom,
                ces projets m'ont permis d’être confrontée aux réelles problématiques que nous sommes
                susceptibles de rencontrer lors des projets réalisés en entreprise.</p>
            <div className='card-container' >
                {projects.map((project, index) => (
                    <div onClick={() => openModal(project)}
                        key={index}
                        className={`card-project ${hoverCard === index ? "hover" : ""}`}
                        onMouseEnter={() => setHoverCard(index)}
                        onMouseLeave={() => setHoverCard(null)}
                    >
                        <div className='containerCard-img'>
                            <img
                                className="project-img"
                                src={project.image}
                                alt={project.title}
                            />
                            <div className="img-survol" >
                                <p className="descriptionCard">{project.descriptionCard}</p>
                            </div>
                        </div>
                        <div className="container-title">
                            <h3 className='title-card'>{project.title}</h3>
                            <img
                                src="/assets/btnCard.png"
                                alt="Voir plus"
                                className="btnCard" onClick={() => openModal(project)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {modalOpen && <ProjectModal project={modal} closeModal={closeModal} />}
        </section>
    );
};

export default Project;
