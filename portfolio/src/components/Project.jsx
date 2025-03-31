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
        <div>
            <h2>Projets</h2>
            {projects.map((project) => (
                <div key={project} className='card-project'>
                    <div className='containerCard-img'>
                        <img className="project-img" src={project.image} alt={project.title} />
                    </div>
                    <div>
                        <h2> {project.title}</h2>
                    </div>
                </div>
            )
            )}

        </div>
    );
};

export default Project;