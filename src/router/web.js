import express from "express";
const router = express.Router();
import homeController from "../controller/homeController"


const initWebRouters = (app) => {
    router.get("/",homeController.handHelloWorld)
    router.get("/user",homeController.handleUserPage )
    router.post("/user/create-user",homeController.handleCreateUser)
    router.post("/user/delete-user/:id",homeController.handleDeleteUser)

    return app.use("/", router)
}

export default initWebRouters;