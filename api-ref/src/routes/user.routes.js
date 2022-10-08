const { Router } = require("express");
const { UserController } = require("../controllers/UserController");
const { UserAvatarController } = require("../controllers/UserAvatarController");

const { ensureAuthenticated } = require("../middlewares/ensureAuthenticated.js");

const uploadConfig = require("../configs/uploads.js");
const multer = require("multer");

const userRoutes = Router();

const userController = new UserController();
const userAvatarController = new UserAvatarController();

const upload = multer(uploadConfig.MULTER);

userRoutes.post("/", userController.create);
// userRoutes.put("/:id", userController.update);
userRoutes.put("/", ensureAuthenticated, userController.update);
userRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update);

module.exports = { userRoutes };
// export { userRoutes };