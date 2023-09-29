import { Router } from "express";
import {check} from 'express-validator';
import {  deleteTodoById, editTodoStatus, getTodo, getTodoByUserId, getTodos, getTodosByStatus, postTodo } from "../../controllers/todo/todo_controller";
import { validateFields } from "../../config/middlewares/validate_fields";

const router = Router(); 

router.get("/",getTodos);

router.get("/:status",[
    check("status", "Status is Required").not().isEmpty(),
    validateFields
],getTodosByStatus);

router.get("/user/:user_id",[
    check("user_id", "USER ID  not Valid").isInt(),
    check("user_id", "USER ID is required").not().isEmpty(),
    validateFields

],getTodoByUserId);

router.get("/:id",[
    check("id","ID not Valid").isInt(),
    validateFields
],getTodo);

router.post("/",[
    check("title", "Title is Required").not().isEmpty(),
    check("user_id", "USER ID is required").not().isEmpty(),
    validateFields
],postTodo);

router.put("/",[
    check("id", "ID not valid").isInt(),
    check("id", "ID is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
    validateFields
],editTodoStatus);

router.delete("/:id",[
    check("id","ID not Valid").isInt(),
    validateFields
],deleteTodoById);

export default router;
