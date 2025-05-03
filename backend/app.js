const express = require('express');
const app = express();
const mongoose = require('mongoose');
const skillRoutes = require("./route/skills");
const projectRoutes = require("./route/project");
const cors = require('cors')



app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://sandraPortfolio:mvWbOo544VvvyXjt@sandradata.e7zrm.mongodb.net/?retryWrites=true&w=majority&appName=SandraDATA',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(cors({ origin: 'https://sandra-rossi.vercel.app' }));


app.use("/api/skills", skillRoutes);
app.use("/api/projects", projectRoutes);

module.exports = app;