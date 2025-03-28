const express = require("express");
const router = express.Router();
const skillCtrl = require("../controleur/skills");

router.post('/', skillCtrl.createSkill);
router.get('/', skillCtrl.getSkills);

module.exports = router;