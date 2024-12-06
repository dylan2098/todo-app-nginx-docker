const express = require('express');
const Todo = require('../models/todo.model');

const router = express.Router();

// Create a new Todo
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all Todos
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
