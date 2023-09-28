import { Router } from "express";
import { getUsers } from "../../controllers/user/user_controller";

const router = Router();

router.get("/",getUsers);
router.post("/",getUsers);

export default router;

