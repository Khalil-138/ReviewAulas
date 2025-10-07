import express from "express"
import router  from "./routes/temperatura.js"

const app = express ()
app.use(express.json())

app.use('/api', router)

//routes

const port = 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})