import express from "express";
const router = express.Router();
import homeController from "../controller/homeController"
import userController from "../controller/userController"


const initWebRouters = (app) => {
    router.get("/",homeController.handHelloWorld)
    router.get("/about",userController.myName )

    return app.use("/", router)
}

export default initWebRouters;