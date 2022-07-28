const { Router } = require("express");

const { useRouter } = require("./user.routes");

const routes = Router();

routes.use("/users", useRouter);

module.exports = { routes };