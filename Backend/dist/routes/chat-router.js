import { Router } from "express";
import { generateChatCompletion, getAllChats, sendUserChat } from "../controllers/chat-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import { chatComplitionValidator, validate } from "../utils/validators.js";
const chatRouter = Router();
chatRouter.get('/', getAllChats);
chatRouter.post('/new', validate(chatComplitionValidator), verifyToken, generateChatCompletion);
chatRouter.get('/all-chat', verifyToken, sendUserChat);
export default chatRouter;
//# sourceMappingURL=chat-router.js.map