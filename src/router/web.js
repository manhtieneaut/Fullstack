import express from "express";
const router = express.Router();
import homeController from "../controller/homeController"


const initWebRouters = (app) => {
    router.get("/",homeController.handHelloWorld)
    router.get("/about", (req, res) => {
        return res.send("My name is Tien")
    })

    return app.use("/", router)
}

export default initWebRouters;