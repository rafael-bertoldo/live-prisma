export type User = {
  id: string
  fullname: string
  email: string
  createdAt: Date
  status: string
}

export type UserCreate = {
  fullname: string
  email: string
}

export type UserUpdate = {
  fullname?: string
  email?: string
}