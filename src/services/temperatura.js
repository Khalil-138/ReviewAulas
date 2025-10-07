class ServiceTemperatura {
    ConvertCeltoFah(cel) {
        //formula
        if(isNaN(cel)){
            throw new Error ("Favor informar apenas números!")
        }
        return  (cel * 9 / 5) + 32
    }

    ConvertFahtoCel() {}
}
export default new ServiceTemperatura()