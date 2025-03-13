import { Request, Response } from "express"
import { usuarioRegisterService } from "../services"
import { usuarioGetAllService } from "../services/usuarioService"


const addUsuaioCTRL = async (req: Request, res: Response) => {
    const response = await usuarioRegisterService(req.body)
    if (response?.error) {
        res.status(response?.status).send(response)
    }
    if (response?.status === 201) {
        res.status(response.status).send(response)
    }
}

const getAllUsuaioCTRL = async (req: Request, res: Response) => {
    // console.log(req.params.filtro)
    const response = await usuarioGetAllService(req.params.filtro?? '')
    res.status(response.status).send(response)
}
export { addUsuaioCTRL, getAllUsuaioCTRL }