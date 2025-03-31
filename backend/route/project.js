const express = require("express");
const router = express.Router();
const projectCtrl = require("../controleur/projects");

router.post('/', projectCtrl.createProjects);
router.get('/', projectCtrl.getProjects);

module.exports = router;