import express from 'express'
import { addUsuaioCTRL, getAllUsuaioCTRL } from '../controllers'
import { ReglasValidacionUsuario } from '../models/validaciones/usuarioValidation'
import { validate } from '../middlewares/validator'


const router = express.Router()

router.post("/addUsuaio",ReglasValidacionUsuario, validate, addUsuaioCTRL)
router.get("/getAllUsuario/:filtro?", getAllUsuaioCTRL)


export { router } 