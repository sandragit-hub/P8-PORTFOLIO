import React, { useEffect, useState } from 'react';

const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/projects')
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((error) => console.log('Error:', error))
    }, [])

    return (
        <div className='container-project'>
            <h2 className='title-project'>Projets</h2>
            <p className='texte-project'> Voici les différents projets réalisés durant mon parcours chez Openclassroom,
                ces projets mon permis d’être conforntée aux réelles problématiques que nous sommes
                susceptibles de rencontrer lors des projets réalisés en entreprise. </p>
            <div className='card-container'>
                {projects.map((project, index) => (
                    <div key={index} className='card-project'>
                        <div className='containerCard-img'>
                            <img className="project-img" src={project.image} alt={project.title} />
                        </div>
                        <div className='container-title'>
                            <h3 className='title-card'> {project.title}</h3>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    );
};

export default Project;