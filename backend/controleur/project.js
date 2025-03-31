const Project = require('.models/Projects');


// Contrôleur pour ajouter les compétences 

exports.createProject = async (req, res, next) => {
    try {
        // Créer un nouveau projet avec les données envoyées dans la requête
        const { title, image } = req.body;
        const newProject = new Project({
            title,
            image,
        });

        // Sauvegarder la compétence dans la base de données
        await newSProject.save();

        // Répondre avec la compétence créée
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



// Controleur pour recuperer les projets


exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error });
    }
};