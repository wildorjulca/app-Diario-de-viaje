import express from 'express'
import { addUsuaioCTRL } from '../controllers'

const router = express.Router()

router.post("/addUsuaio", addUsuaioCTRL)

export { router } 