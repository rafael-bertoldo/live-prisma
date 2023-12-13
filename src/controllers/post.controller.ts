import { Request, Response } from "express";
import { Post } from "../interfaces/post.interface";
import { createPostService, deletePostService, readAllPostsService, readPostByIdService, updatePostService } from "../services/post.service";

export const createPostController = async (req: Request, res: Response): Promise<Response> => {
  const post: Post = await createPostService(req.body)

  return res.status(201).json(post)
}

export const readAllPostsController = async (req: Request, res: Response): Promise<Response> => {
  const posts: Post[] = await readAllPostsService()

  return res.status(200).json(posts)
}

export const readPostByIdController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  const post: Post = await readPostByIdService(id)

  return res.status(200).json(post)
}

export const updatePostController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  const post: Post = await updatePostService(id, req.body)

  return res.status(200).json(post)
}

export const deletePostController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params

  await deletePostService(id)

  return res.status(200).json({message: 'Post deleted'})
}