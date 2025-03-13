import { ResultSetHeader, RowDataPacket } from "mysql2"
import { coneccion } from "../config/conexion"

const cn = coneccion()

const usuarioGetAllService = async (filtro: string) => {
    console.log(filtro)
    try {
        const [result] = await cn.promise().query<RowDataPacket[]>("CALL getAllUsuario(?)",[filtro])

        if (result[0].length > 0) {
            return { status: 200, succes: true, data: result[0] }
        }
        return {
            status: 404, succes: false, data: [], mensaje: "No ay datos "
        }
    } catch (error) {
        return {
            status: 500,
            succes: false,
            mensaje: "Error de servidor o en la base de datos",
            error: error
        }
    }

}

export {usuarioGetAllService}