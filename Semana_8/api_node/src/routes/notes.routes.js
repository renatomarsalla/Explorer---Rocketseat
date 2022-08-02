const { Router } = require("express");
const { NotesController } = require("../controllers/NotesController");

const notesController = new NotesController();

const useNotes = Router();

useNotes.post("/:user_id", notesController.create);
useNotes.get("/:id", notesController.show);
useNotes.delete("/:id", notesController.delete);
useNotes.get("/", notesController.index);

module.exports = { useNotes };