import { Router } from "express";
import { createUser, getUserById, getUsers } from "../../controllers/user/user_controller";
import { check } from 'express-validator';
import { validateFields } from "../../config/middlewares/validate_fields";

const router = Router();

router.get("/",getUsers);

router.get("/:id",[
    check("id", "ID is Required").not().isEmpty(),
    check("id", "ID not valid").isInt(),
    validateFields

],getUserById);

router.post("/",[
    check("nombre","Nombre is Required").not().isEmpty(),
    check("email","Email is Required").not().isEmpty(),
    check("email","Email not Valid").isEmail(),
    check("password","Password is Required").not().isEmpty(),
    check("password","Password must be more than 6 character").isLength({min: 6}),
    validateFields
],createUser);

export default router;

