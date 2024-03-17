import { Router } from "express";
import { generateChatCompletion, getAllChats } from "../controllers/chat-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import { signupValidator, validate } from "../utils/validators.js";
const chatRouter = Router();
chatRouter.get('/', getAllChats);
chatRouter.post('/new', validate(signupValidator), verifyToken, generateChatCompletion);
export default chatRouter;
//# sourceMappingURL=chat-router.js.map