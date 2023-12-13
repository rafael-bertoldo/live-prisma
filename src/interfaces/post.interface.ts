export type Post = {
  id: string
  title: string
  content: string | null
  createdAt: Date
  user_id: string
}

export type PostCreate = {
  title: string
  content: string | null
  user_id: string
}

export type PostUpdate = {
  title?: string
  content?: string
  user_id: string
}