import { Router } from "express";
import { generateChatCompletion, getAllChats } from "../controllers/chat-controller.js";
import { verifyToken } from "../utils/token-manager.js";
import { chatComplitionValidator, validate } from "../utils/validators.js";

const chatRouter = Router();

chatRouter.get('/',getAllChats);
chatRouter.post('/new',validate(chatComplitionValidator),verifyToken,generateChatCompletion);
export default chatRouter;