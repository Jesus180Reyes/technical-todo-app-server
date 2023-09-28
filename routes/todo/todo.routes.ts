import { Router } from "express";
import { getTodo, getTodos, postTodo } from "../../controllers/todo/todo_controller";


const router = Router(); 

router.get("/",getTodos);

router.get("/:id",getTodo);

router.post("/",postTodo);

export default router;
