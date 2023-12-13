import { Router } from "express";
import { createPostController, deletePostController, readAllPostsController, readPostByIdController, updatePostController } from "../controllers/post.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const postRouter: Router = Router()

postRouter.post('/', createPostController)
postRouter.get('/', readAllPostsController)
postRouter.get('/:id', readPostByIdController)
postRouter.patch('/:id', verifyEmail, updatePostController)
postRouter.delete('/:id', deletePostController)