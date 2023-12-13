import { Router } from "express";
import { createUserController, deleteUserController, readAllUsersController, readUserByIdController, updateUserController } from "../controllers/user.controller";
import { verifyEmail } from "../middlewares/verifyEmail.middleware";

export const userRouter: Router = Router()

userRouter.post('/', createUserController)
userRouter.get('/', readAllUsersController)
userRouter.get('/:id', readUserByIdController)
userRouter.patch('/:id', verifyEmail, updateUserController)
userRouter.delete('/:id', deleteUserController)