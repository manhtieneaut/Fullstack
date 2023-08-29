import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./router/web";
require("dotenv").config();
import bodyParser from "body-parser";

const app = express();

//config view engine
configViewEngine(app);

//config body-parter
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//config web routers
initWebRouters(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(">>> JWT Backend is running on port = ", + PORT);
})