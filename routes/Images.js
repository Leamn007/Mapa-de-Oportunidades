const express = require('express');
const router = express.Router();
const { Images } = require("../models");
const multer = require("multer");
const multerConfig = require("../config/multer");

router.post("/", multer(multerConfig).single("file"), async (req, res) => {
    const { originalname: name, size, key } = req.file;
    const image = await Images.create({
        name,
        size,
        key,
        url: '',
    });
    res.json(image);
});

router.get("/", async (req, res) => {
    const listOfImages = await Images.findAll();
    res.json(listOfImages);
});

router.delete("/:id", async (req, res) => {
const id = req.params.id;
await Images.destroy({
    where: {
        id: id,
    },
});
res.json('DELETED SUCESSFULLY');
});


module.exports = router;