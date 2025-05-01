const Skill = require('../models/Skill');



// Contrôleur pour ajouter les compétences 

exports.createSkill = async (req, res, next) => {
    try {
        // Créer une nouvelle compétence avec les données envoyées dans la requête
        const { title, image } = req.body;
        const newSkill = new Skill({
            title,
            image,
        });

        // Sauvegarder la compétence dans la base de données
        await newSkill.save();

        // Répondre avec la compétence créée
        res.status(201).json(newSkill);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Controleur pour recuperer les compétences

exports.getSkills = async (req, res, next) => {
    try {
        const skills = await Skill.find();
        res.status(200).json(skills);
    } catch (error) {
        console.error("Erreur MongoDB :", error);
        res.status(400).json({ error });
    }
};