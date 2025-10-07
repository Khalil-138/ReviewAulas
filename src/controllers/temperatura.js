import ServiceTemperatura from '../services/temperatura.js'

class ControllerCelFah{
    convertCelToFah(req, res) {
        try {
            const celsius = req.body.cel
            
            //chama o service
            // faz a fórmula 
            //pega o resultado
            const cel = req.body.cel

            const fah = ServiceTemperatura.ConvertCeltoFah(cel)
            

            res.status(200).send({data: {celsius, fah   } })
        } catch (error) {
            res.status(400).send({msg: error.message})
        }

    }
    ConvertFahToCel(req, res){
         try {
            
        } catch (error) {
            res.status(400).send({msg: error.message})
        }

    }

}

export default new ControllerCelFah()