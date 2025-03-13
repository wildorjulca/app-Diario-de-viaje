import express from "express";
import { router } from "./routers/usuarioRouter";
import cors from 'cors'

const app = express()

// app.use(cors({
//     origin: "http://localhost:8081",
//     credentials: true
// }))
// app.use(cors())

app.use(cors({
    origin: "http://192.168.222.245:8081", // Dirección Expo
    credentials: true,
}));



app.use(express.json())

app.use("/api", router)

app.listen(3000, () => {
    console.log("Servidor en ejecucion")
})