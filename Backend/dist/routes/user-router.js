import { Router } from "express";
import { getAllUsers, createUser, signIn } from "../controllers/user-controller.js";
import { validate, signupValidator, signinValidator } from "../utils/validators.js";
const userRouter = Router();
userRouter.get('/', getAllUsers);
userRouter.post('/signin', validate(signinValidator), signIn);
userRouter.post('/signup', validate(signupValidator), createUser);
export default userRouter;
//# sourceMappingURL=user-router.js.map