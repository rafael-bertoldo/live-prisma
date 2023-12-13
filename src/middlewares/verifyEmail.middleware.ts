import { NextFunction, Request, Response } from "express";
import { User } from "../interfaces/user.interface";
import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";

export const verifyEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

  if(!req.body.email) return next()

  const user: User | null = await prisma.user.findUnique({
    where: {
      email: req.body.email
    }
  })

  if(user) throw new AppError('email already exists', 409)

  return next()
}