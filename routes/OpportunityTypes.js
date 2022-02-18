const express = require('express');
const router = express.Router();
const { OpportunityTypes } = require("../models");

router.post("/", async (req, res) => {
    const type = req.body;
    await OpportunityTypes.create(type);
    res.json(type);
});

router.get("/", async (req, res) => {
    const listOfTypes = await OpportunityTypes.findAll();
    res.json(listOfTypes);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const type = await OpportunityTypes.findByPk(id);
    res.json(type);
  });


module.exports = router;