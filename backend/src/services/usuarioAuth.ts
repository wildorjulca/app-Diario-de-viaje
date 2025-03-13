import { ResultSetHeader } from "mysql2";
import { coneccion } from "../config/conexion";
import { UsuarioType } from "../interface";
import bcrypt  from 'bcrypt'

const cn = coneccion()
const usuarioRegisterService = async (usuario: UsuarioType) => {
    try {
        const passwodHash = bcrypt.hashSync(usuario.password, 10) 
        
        const [result] = await cn.promise().query<ResultSetHeader>("CALL registerUsuario(?,?,?,?,?)",
            [usuario.nombre, usuario.email, passwodHash, usuario.rol ?? 'usuario', usuario.foto_perfil]
        )
        if (result.affectedRows === 1) {
            return { status: 201, succes: true, mensaje: "Usuario Creado" }
        }
    } catch (error) {
        console.log(error)
        return {
            status: 500,
            succes: false,
            mensaje: "Error de servidor o en la base de datos",
            error: error
        }
    }

}


export { usuarioRegisterService }