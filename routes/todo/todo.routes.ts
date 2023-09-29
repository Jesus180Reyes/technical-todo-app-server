import { Router } from "express";
import {  deleteTodoById, editTodoStatus, getTodo, getTodos, getTodosByStatus, postTodo } from "../../controllers/todo/todo_controller";


const router = Router(); 

router.get("/",getTodos);

router.get("/:status",getTodosByStatus);

router.get("/:id",getTodo);

router.post("/",postTodo);

router.put("/",editTodoStatus);

router.delete("/:id",deleteTodoById);

export default router;
