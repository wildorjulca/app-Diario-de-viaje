import express from "express";
import { router } from "./routers/usuarioRouter";

const app = express()


app.use("/api", router)
app.listen(3000, () => {
    console.log("Servidor en ejecucion")
})