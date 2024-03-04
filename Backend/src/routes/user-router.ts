import { Router } from "express"; 
import { getAllUsers,createUser } from "../controllers/user-controller.js";

const userRouter = Router();

userRouter.get('/',getAllUsers)
userRouter.post('/signup',createUser)
export default userRouter;