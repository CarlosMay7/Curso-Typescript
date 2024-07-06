"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToDo = exports.updateToDos = exports.getToDos = exports.createToDo = void 0;
const todo_1 = require("../models/todo");
let toDos = [];
const createToDo = (req, resp, nest) => {
    const text = req.body.text;
    const newToDo = new todo_1.ToDo(Math.random().toString(), text);
    toDos.push(newToDo);
    resp.status(201).json({ message: 'Todo creado', createdToDo: newToDo });
};
exports.createToDo = createToDo;
const getToDos = (req, resp, next) => {
    resp.json({ toDos: toDos });
};
exports.getToDos = getToDos;
const updateToDos = (req, resp, next) => {
    const toDoId = req.params.id;
    const updatedText = req.body.text;
    const index = toDos.findIndex(todo => todo.id = toDoId);
    if (index < 0) {
        throw new Error('ToDo no encontrado');
    }
    toDos[index] = new todo_1.ToDo(toDos[index].id, updatedText);
    resp.status(201).json({ message: 'ToDo actuaizado', updatedToDo: toDos[index] });
};
exports.updateToDos = updateToDos;
const deleteToDo = (req, resp, next) => {
    const toDoId = req.params.id;
    const index = toDos.findIndex(todo => todo.id = toDoId);
    if (index < 0) {
        throw new Error('ToDo no encontrado');
    }
    toDos.splice(index, 1);
    resp.json({ message: 'ToDo eliminado' });
};
exports.deleteToDo = deleteToDo;
