import { Router } from "express";
import { authLogin } from "../../controllers/auth/auth_controller";
import { check } from 'express-validator';
import { validateFields } from "../../config/middlewares/validate_fields";


const router = Router();

router.post("/", [
    check("email", "Email is Required").not().isEmpty(),
    check("email", "Email not Valid").isEmail(),
    check("password", "Password is required").not().isEmpty(),
    check("password", "Password must be more than 6 characters").isLength({min: 6}),
    validateFields,
],authLogin)


export default  router;