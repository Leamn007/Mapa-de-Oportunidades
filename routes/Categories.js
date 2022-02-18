const express = require('express');
const router = express.Router();
const { Categories } = require("../models");

router.post("/", async (req, res) => {
    const category = req.body;
    await Categories.create(category);
    res.json(category);
});

router.get("/", async (req, res) => {
    const listOfCategories = await Categories.findAll();
    res.json(listOfCategories);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const category = await Categories.findByPk(id);
    res.json(category);
});

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const { name, description} = req.body;
    const category = await Categories.update({ name: name, description: description}, { where: { id: id } });

    res.json(category);
});

router.delete("/:id", async (req, res) => {
const id = req.params.id;
await Categories.destroy({
    where: {
        id: id,
    },
});
res.json('DELETED SUCESSFULLY');
});


module.exports = router;