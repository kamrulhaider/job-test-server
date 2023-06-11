const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());

const userRouter = require("./routers/userRouter");
const categoryDetailsRouter = require("./routers/addCategoryRouter");

//using cors
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
require("dotenv").config();

//Connect mongoDB
mongoose.connect(process.env.DB);

// routes;
app.use("/", userRouter);
app.use("/category", categoryDetailsRouter);

port = process.env.PORT || 8088;

app.listen(port, () => console.log("Listening"));
