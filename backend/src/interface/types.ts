

export interface UsuarioType {
    id: number,
    nombre : string,
    email: string,
    password: string,
    rol: 'admin' | 'usuario',
    foto_perfil? : string
}