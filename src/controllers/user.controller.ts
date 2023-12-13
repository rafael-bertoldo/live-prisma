import { Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import { createUserService, deleteUserService, readAllUsersService, readUserByIdService, updateUserService } from "../services/user.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await createUserService(req.body)

  return res.status(201).json(user)
}

export const readAllUsersController = async (req: Request, res: Response): Promise<Response> => {
  const users: User[] = await readAllUsersService()

  return res.status(200).json(users)
}

export const readUserByIdController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  const user: User = await readUserByIdService(id)

  return res.status(200).json(user)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  const user: User = await updateUserService(id, req.body)

  return res.status(200).json(user)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  await deleteUserService(id)

  return res.status(200).json({message: 'User deleted'})
}