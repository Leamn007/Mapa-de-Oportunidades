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

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, description} = req.body;
    const oppTypes = await OpportunityTypes.update({ name: name, description: description}, { where: { id: id } });

    res.json(oppTypes);
});

router.delete("/:id", async (req, res) => {
const id = req.params.id;
await OpportunityTypes.destroy({
    where: {
        id: id,
    },
});
res.json('DELETED SUCESSFULLY');
});



module.exports = router;