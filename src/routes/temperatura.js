import express from 'express'
import ControllerTemperatura from '../controllers/temperatura.js'


//rotas do express
// app.get, app.post 

const router = express.Router()


//primeiro paramentro é o endpoint (/celsios)
router.post('/celFah', ControllerTemperatura.convertCelToFah)


export default router