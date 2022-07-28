const { Router } = require("express");
const { UserController } = require("../controllers/UserController");

const useRouter = Router();

const userController = new UserController();

useRouter.post("/", userController.create);
useRouter.put("/:id", userController.update);

module.exports = { useRouter };