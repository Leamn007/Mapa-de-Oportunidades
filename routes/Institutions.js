const express = require('express');
const router = express.Router();
const { Institutions } = require("../models");

router.post("/", async (req, res) => {
    const institution = req.body;
    await Institutions.create(institution);
    res.json(institution);
});

router.get("/", async (req, res) => {
    const listOfInstitutions = await Institutions.findAll();
    res.json(listOfInstitutions);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const institution = await Institutions.findByPk(id);
    res.json(institution);
  });


module.exports = router;