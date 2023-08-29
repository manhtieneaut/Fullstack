import express from "express";
const router = express.Router();
import homeController from "../controller/homeController"


const initWebRouters = (app) => {
    router.get("/",homeController.handHelloWorld)
    router.get("/user",homeController.handleUserPage )
    router.post("/user/create-user",homeController.handleCreateUser)

    return app.use("/", router)
}

export default initWebRouters;