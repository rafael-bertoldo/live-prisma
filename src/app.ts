import 'express-async-errors'
import express, {Application, json} from 'express'
import { router } from './routers'
import { PrismaClient } from '@prisma/client'
import { handleErros } from './middlewares/handleErrors.middleware'

export const prisma: PrismaClient = new PrismaClient()

export const app: Application = express()

app.use(json())

app.use(router)

app.use(handleErros)
