const express = require("express");
const router = express.Router();

// Get Sequelize Model
const Todos = require("../sequelize/models/todos");

// Middlewares
const validate = require("../middlewares/validate");
const { newTodo, uuid } = require("../middlewares/validationSchemas");

router.get("/", async (req, res) => {
  const todos = await Todos.findAll();
  res.status(200).json(todos);
});

router.post("/", validate(newTodo, "body"), async (req, res) => {
  const { desc } = req.body;
  const newTodo = await Todos.create({ desc });
  res.status(201).json(newTodo);
});

router.put("/:id", validate(uuid, "params"), async (req, res) => {
  const { id } = req.params;
  const { desc, isDone } = req.body;
  const updatedTodo = await Todos.update({ desc: desc, isDone: isDone }, { where: { uuid: id } });
  res.status(204).end();
});

router.delete("/:id", validate(uuid, "params"), async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todos.destroy({ where: { uuid: id } });
  res.status(204).json(deletedTodo);
});

module.exports = router;
