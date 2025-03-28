import React, { useEffect, useState } from 'react';


const Skills = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/skills')
            .then((res) => res.json())
            .then((data) => setSkills(data))
            .catch((error) => console.log('Error:', error));

    }, [])

    return (
        <div className='skills-container'>
            <h2> Compétences</h2>
            <div className="all-skills">
                {skills.map((skill, index) => (
                    <div key={index} className="logo-container">
                        <div className="container-img">
                            <img className="skill-img" src={skill.image} alt={skill.title} />
                        </div>
                        <h3>{skill.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;