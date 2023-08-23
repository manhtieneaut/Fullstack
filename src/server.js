import express from "express";

import configViewEngine from "./configs/viewEngine";
import initWebRouters from "./router/web";
require("dotenv").config();

const app = express();

//config view engine
configViewEngine(app);

//config web routers
initWebRouters(app);

const PORT  = process.env.PORT || 8080;
app.listen(PORT,() => {
    console.log(">>> JWT Backend is running on port = ", + PORT);
})