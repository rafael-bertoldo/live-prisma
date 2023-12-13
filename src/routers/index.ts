import { Router } from "express";
import { userRouter } from "./user.router";
import { postRouter } from "./post.router";

export const router: Router = Router()

router.use('/users', userRouter)
router.use('/posts', postRouter)