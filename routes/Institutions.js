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

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, description, logo, email, phone} = req.body;
    const institutions = await Institutions.update({ name: name, description: description, logo: logo, email: email, phone: phone}, { where: { id: id } });

    res.json(institutions);
});

router.delete("/:id", async (req, res) => {
const id = req.params.id;
await Institutions.destroy({
    where: {
        id: id,
    },
});
res.json('DELETED SUCESSFULLY');
});



module.exports = router;