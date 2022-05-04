require('dotenv').config();

const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");

// Routes
const opportunityTypesRouter = require("./routes/OpportunityTypes");
app.use("/OpportunityTypes", opportunityTypesRouter);

const categoriesRouter = require("./routes/Categories");
app.use("/Categories", categoriesRouter);

const institutionRouter = require("./routes/Institutions");
app.use("/Institutions", institutionRouter);

const opportunityRouter = require("./routes/Opportunities");
app.use("/Opportunities", opportunityRouter);

const imageRouter = require("./routes/Images");
app.use("/Images", imageRouter);

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server is running");
    });
});