import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from "../config";


const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch(`${API_BASE_URL}/api/skills`)
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((error) => console.log('Error:', error));

    }, [])

    return (
        <div className='skills'>
            <h2 className='title-competence'> Compétences</h2>
            <div className='skills-container'>
                <div className="all-skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="logo-container">
                            <div className="container-img">
                                <img className="skill-img" src={skill.image} alt={'icone' + skill.title} />
                            </div>
                            <h3 className='skill-title'>{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;