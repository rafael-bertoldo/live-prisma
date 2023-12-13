import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError.error";

export const handleErros = (err: unknown, req: Request, res: Response, next: NextFunction): Response => {
  if (err instanceof AppError) {
    return res.status(err.status).json({ message: err.message })
  }

  console.log(err)
  return res.status(500).json({ message: 'Internal Server Error' })
}