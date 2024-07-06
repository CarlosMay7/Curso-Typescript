import { Router } from "express";
import { createToDo, deleteToDo, getToDos, updateToDos } from "../controllers/todo";

const router = Router();

router.post('/', createToDo);
router.get('/', getToDos);
router.patch('/:id', updateToDos);
router.delete('/:id', deleteToDo);

export default router;