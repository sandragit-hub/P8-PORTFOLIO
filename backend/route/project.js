const express = require("express");
const router = express.Router();
const projectCtrl = require("../controleur/project");

router.post('/', projectCtrl.createProject);
router.get('/', projectCtrl.getProjects);

module.exports = router;