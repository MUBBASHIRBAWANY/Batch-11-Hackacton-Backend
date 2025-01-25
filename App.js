import express from "express"
import db from "./db/db.js"
import UserRouter from "./Routes/UserRouter.js"
import cors from 'cors'

const Router = express.Router()
const app = express()
app.use(cors());

let dataBase = db
dataBase()

export const users = app.use('/', UserRouter)


