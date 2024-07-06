import { RequestHandler } from "express";
import { ToDo } from "../models/todo";

let toDos: ToDo[] = [];

export const createToDo: RequestHandler = (req, resp, nest) => {
    const text = (req.body as {text: string}).text;
    const newToDo = new ToDo(Math.random().toString(), text);
    toDos.push(newToDo)

    resp.status(201).json({message: 'Todo creado', createdToDo: newToDo})
}

export const getToDos: RequestHandler = (req, resp, next) => {
    resp.json({toDos: toDos});
}

export const updateToDos:RequestHandler<{id: string}> = (req, resp, next) => {
    const toDoId = req.params.id; 
    const updatedText = (req.body as {text: string}).text;

    const index = toDos.findIndex(todo => todo.id = toDoId);

    if(index < 0) {
        throw new Error('ToDo no encontrado');
    }

    toDos[index] = new ToDo(toDos[index].id, updatedText);
    resp.status(201).json({message: 'ToDo actuaizado', updatedToDo: toDos[index]});
}

export const deleteToDo: RequestHandler = (req, resp, next) => {
    const toDoId = req.params.id;

    const index = toDos.findIndex(todo => todo.id = toDoId);

    if(index < 0) {
        throw new Error('ToDo no encontrado');
    }

    toDos.splice(index, 1);
    resp.json({message: 'ToDo eliminado'});

}