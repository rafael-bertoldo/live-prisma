import { prisma } from "../app";
import { AppError } from "../errors/AppError.error";
import { User, UserCreate, UserUpdate } from "../interfaces/user.interface";

export const createUserService = async (data: UserCreate): Promise<User> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      email: data.email
    }
  })

  if(user) throw new AppError('Email already exists', 409)

  const newUser: User = await prisma.user.create({
    data
  })

  return newUser
}

export const readAllUsersService = async (): Promise<User[]> => {
  const users: User[] = await prisma.user.findMany()

  return users
}

export const readUserByIdService = async (id: string): Promise<User> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id
    },
    include: {
      posts: true
    }
  })

  if(!user) throw new AppError('User not found', 404)

  return user
}

export const updateUserService = async (id: string, data: UserUpdate): Promise<User> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id
    }
  })

  if(!user) throw new AppError('user not found', 404)

  const updateUser = prisma.user.update({
    where: {
      id
    },
    data
  })

  return updateUser
}

export const deleteUserService = async (id: string): Promise<void> => {
  const user: User | null = await prisma.user.findUnique({
    where: {
      id
    }
  })

  if(!user) throw new AppError('User not found', 404)

  // HARD DELETE

  // await prisma.user.delete({
  //   where: {
  //     id
  //   }
  // })

  // SOFT DELETE

  await prisma.user.update({
    where: {
      id
    },
    data: {
      status: "INACTIVE"
    }
  })
}