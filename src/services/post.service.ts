import {prisma} from '../app'
import { AppError } from '../errors/AppError.error';
import { Post, PostCreate, PostUpdate } from "../interfaces/post.interface";
import { User } from "../interfaces/user.interface";

export const createPostService = async (data: PostCreate): Promise<Post> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id: data.user_id
    }
  })

  if(!user) throw new AppError('User not found', 404)

  const post: Post = await prisma.post.create({
    data
  })

  return post
}

export const readAllPostsService = async (): Promise<Post[]> => {
  const posts: Post[] = await prisma.post.findMany({
    include: {
      user: true
    }
  })

  return posts
}

export const readPostByIdService = async (id: string): Promise<Post> => {
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id
    },
    include: {
      user: true
    }
  })

  if (!post) throw new AppError('Post not found', 404)

  return post
}

export const updatePostService = async (id: string, data: PostUpdate): Promise<Post> => {
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id,
      user_id: data.user_id
    }
  })

  if(!post) throw new AppError('Post not found', 404)

  const updatePost: Post = await prisma.post.update({
    where: {
      id
    },
    data
  })

  return updatePost
}

export const deletePostService = async (id: string): Promise<void> => {
  const post: Post | null = await prisma.post.findUnique({
    where: {
      id
    }
  })

  if(!post) throw new AppError('Post not found', 404)

  await prisma.post.delete({
    where: {
      id
    }
  })
}