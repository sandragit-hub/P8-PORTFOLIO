const Project = require('.models/Projects');

// Controleur pour recuperer les projets


exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Skill.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error });
    }
};