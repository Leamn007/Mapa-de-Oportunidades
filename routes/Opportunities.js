const express = require('express');
const router = express.Router();
const db = require("../models");
const { Opportunities } = require("../models");

router.post("/", async (req, res) => {
    const opportunity = req.body;
    await Opportunities.create(opportunity);
    res.json(opportunity);
});

router.get("/", async (req, res) => {
    const listOfOpportunities = await Opportunities.findAll({
        include: [db.Categories, db.OpportunityTypes, db.Institutions]
    });
    res.json(listOfOpportunities);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const opportunity = await Opportunities.findByPk(id, {
        include: [db.Categories, db.OpportunityTypes, db.Institutions]
    });
    res.json(opportunity);
});

router.get("/Category/:categoryId", async (req, res) => {
    const categoryId = req.params.categoryId;
    const opportunity = await Opportunities.findAll({ where: { CategoryId: categoryId } });
    res.json(opportunity);
});

router.get("/OpportunityType/:typeId", async (req, res) => {
    const typeId = req.params.typeId;
    const opportunity = await Opportunities.findAll({ where: { OpportunityTypeId: typeId } });
    res.json(opportunity);
});

router.get("/Institution/:institutionId", async (req, res) => {
    const institutionId = req.params.institutionId;
    const opportunity = await Opportunities.findAll({ where: { InstitutionId: institutionId } });
    res.json(opportunity);
});

module.exports = router;