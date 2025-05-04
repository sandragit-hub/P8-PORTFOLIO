const express = require('express');
const app = express();
const mongoose = require('mongoose');
const skillRoutes = require("./route/skills");
const projectRoutes = require("./route/project");
const cors = require('cors')



app.use(express.json());

const allowedOrigins = [
    'http://localhost:5175',
    'https://sandra-rossi.vercel.app'
];

app.use(cors({
    origin: function (origin, callback) {
        // autoriser les outils comme Postman sans origin
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));


mongoose.connect('mongodb+srv://sandraPortfolio:mvWbOo544VvvyXjt@sandradata.e7zrm.mongodb.net/?retryWrites=true&w=majority&appName=SandraDATA',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);

module.exports = app;