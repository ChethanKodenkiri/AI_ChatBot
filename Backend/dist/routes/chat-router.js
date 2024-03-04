import { Router } from "express";
import { getAllChats } from "../controllers/chat-controller.js";
const chatRouter = Router();
chatRouter.get('/', getAllChats);
export default chatRouter;
//# sourceMappingURL=chat-router.js.map