const { Router } = require("express");
const { TagsController } = require("../controllers/TagsController")

const tagsController = new TagsController();

const useTags = Router();

useTags.get("/:user_id", tagsController.index);

module.exports = { useTags }