import { Router } from "express";
import { authLogin } from "../../controllers/auth/auth_controller";


const router = Router();

router.post("/" ,authLogin)


export default  router;