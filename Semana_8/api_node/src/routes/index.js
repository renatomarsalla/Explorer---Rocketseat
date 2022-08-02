const { Router } = require("express");

const { useRouter } = require("./user.routes");
const { useNotes } = require("./notes.routes");
const { useTags } = require("./tags.routes");

const routes = Router();

routes.use("/users", useRouter);
routes.use("/movie_notes", useNotes);
routes.use("/tags", useTags);

module.exports = { routes };