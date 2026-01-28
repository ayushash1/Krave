import { Router } from "express";

import { signIn, signUp, signOut } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.post("/signout", signOut);

export default authRouter;
